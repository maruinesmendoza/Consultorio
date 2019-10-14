import { Request, Response } from 'express';
import pool from '../database';

var getName: string = "paciente";
export class PacienteController {

    public async list(req: Request, res: Response): Promise<void> {
        const result = await pool.query('SELECT * FROM ' + getName );
        res.json(result);
    }

    public async get(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const entityresult = await pool.query('SELECT * FROM ' + getName  + ' WHERE id = ?', [id]);
        console.log(entityresult.length);
        if (entityresult.length > 0) {
            return res.json(entityresult[0]);
        }
        res.status(404).json({ text: "The " + getName  + " doesn't exits" });
    }

    public async post(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ' + getName  + ' set ?', [req.body]);
        res.json({ message: getName  + ' Saved' });
    }

    public async put(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const old = req.body;
        await pool.query('UPDATE ' + getName  + ' set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The " + getName  + " was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ' + getName  + ' WHERE id = ?', [id]);
        res.json({ message: "The " + getName  + " was deleted" });
    }
}


