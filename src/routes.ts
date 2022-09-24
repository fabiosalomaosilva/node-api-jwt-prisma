import { Request, Response, Router } from "express"

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).send('Deu certo');
})

router.get('/teste', (req: Request, res: Response) => {
    return res.status(200).send('Teste deu certo');
})

export default router;