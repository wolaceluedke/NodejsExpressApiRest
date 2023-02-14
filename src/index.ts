import { Console } from 'console';
import express, { Request, Response, NextFunction } from 'express';

const app = express();
// express é um gerenciador de rotas, alguém que nos permite receber as coisas e devolver sobre
//protocolo http

//CONFIGURANDO ROTAS 
app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso total! vocês são de mais' })
})// quando chegar a requisição do tipo GET na rota /status ele vai aacionar o resolver para a gente

app.listen(3000, () => {
    console.log('aplicação executando na porta 3000');

})