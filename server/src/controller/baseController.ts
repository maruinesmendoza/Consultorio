import { Request, Response } from 'express';
import pool from '../database';

var entityname: string;

export class BaseController {

    constructor(name: string) { entityname = name; }
    public async list(req: Request, res: Response): Promise<void> {
        const result = await pool.query('SELECT * FROM ' + entityname);
        res.json(result);
    }

    public async get(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const entityresult = await pool.query('SELECT * FROM ' + entityname + ' WHERE id = ?', [id]);
        console.log(entityresult.length);
        if (entityresult.length > 0) {
            return res.json(entityresult[0]);
        }
        res.status(404).json({ text: "The " + entityname + " doesn't exits" });
    }

    public async post(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ' + entityname + ' set ?', [req.body]);
        res.json({ message: entityname + ' Saved' });
    }

    public async put(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const old = req.body;
        await pool.query('UPDATE ' + entityname + ' set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The " + entityname + " was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ' + entityname + ' WHERE id = ?', [id]);
        res.json({ message: "The " + entityname + " was deleted" });
    }
}



