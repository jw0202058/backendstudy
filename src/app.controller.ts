import { Controller, Delete, Get, Post, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // parameter query
  // 
  @Get('/:index')
  getUsernameByIndex(@Param('index') index: number, @Res() res: Response){
    try{
      const username = this.appService.getUsernameByIndex(index);
      res.send(username);
    } catch(error){
      res.status(400).send(error.message);
    }
  }

  @Post('/:name')
  postUsername(@Param('name') name: string, @Res() res: Response){
    try{
      const username = this.appService.postUsername(name);
      res.send(username);
    } catch(error){
      res.status(400).send(error.message);
    }
  }

  @Delete('/:index')
  deleteUsernameByIndex(@Param('index') index: number, @Res() res: Response){
    try{
      const username=this.appService.deleteUsernameByIndex(index);
      res.send(username);
    }
    catch(error){
      res.status(400).send(error.message);
    }
  }
}
