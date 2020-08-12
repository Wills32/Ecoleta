import {Request, Response} from 'express';
import knex from '../database/connection';
class PointsController {
    
    async index(request: Request, response: Response){
        // FILTRO DE UF, CIDADE E ITEMS utilizando request.query
        const{ city, uf , items} = request.query;
        
        const parsedItems = String(items)
        .split(',')
        .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        const serializedPoints = points.map(point => {
            return {
                ...point,
                //image_url: `http://localhost:3333/uploads/${item.image}`,
                image_url: `http://192.168.0.13:3333/uploads/${point.image}`,
            };
        });

        return response.json(serializedPoints);
    }

    async show(request: Request, response: Response){
        const { id } = request.params;
        const point = await knex('points').where('id',id).first();
        if(!point){
            return response.status(400).json({message:'Point not found'});
        }
        /**
         * Select * from items
         * JOIN point_items ON items.id = pointitems.item_id
         * WHERE point_items.point_id = {id}
         */

        const serializedPoint = {
                ...point,
                //image_url: `http://localhost:3333/uploads/${item.image}`,
                image_url: `http://192.168.0.13:3333/uploads/${point.image}`,
        };

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id',id)
            .select('items.title');

        return response.json({point: serializedPoint, items});

    }
    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;
    
        // ira evitar a geracao de novo registro quando ocorrer um erro na geracao do Point Id
        const trx = await knex.transaction();
        const point = {
            image: request.file.filename,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,


        };
        //Query que gera um novo registro  no banco de dados
        const insertedIds = await trx('points').insert(point);
        //Query que irà gerar os point IDs reposavei por favor o relaconamento muito para muito entre a tabela items e points( pontos de coleta)
        const point_id = insertedIds[0];
        const pointItems = items
        .split(',')
        .map((item:string) => Number(item.trim()))
        .map((item_id: number) => {
            return {
                item_id,
                point_id,
            };
        });
    
        await trx('point_items').insert(pointItems);

        await trx.commit();

        return response.json({ 
            id: point_id,
            ...point,
         });
    }
}
export default PointsController;