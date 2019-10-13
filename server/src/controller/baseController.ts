import { Request, Response } from 'express';
import pool from '../database';


export class BaseController {
    public entityname: string = "";

    constructor(name: string) { this.entityname = name; }
    public async list(req: Request, res: Response): Promise<void> {
        const result = await pool.query('SELECT * FROM ' + this.entityname);
        res.json(result);
    }

    public async get(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const entityresult = await pool.query('SELECT * FROM ' + this.entityname + ' WHERE id = ?', [id]);
        console.log(entityresult.length);
        if (entityresult.length > 0) {
            return res.json(entityresult[0]);
        }
        res.status(404).json({ text: "The " + this.entityname + " doesn't exits" });
    }

    public async post(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ' + this.entityname + ' set ?', [req.body]);
        res.json({ message: this.entityname + ' Saved' });
    }

    public async put(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const old = req.body;
        await pool.query('UPDATE ' + this.entityname + ' set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The " + this.entityname + " was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ' + this.entityname + ' WHERE id = ?', [id]);
        res.json({ message: "The " + this.entityname + " was deleted" });
    }
}



