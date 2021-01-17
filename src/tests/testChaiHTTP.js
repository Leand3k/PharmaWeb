let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../index')

chai.use(chaiHttp);
// const url = "http://localhost:3000";

/*
* Test the GET articulo route
*/
   describe('get all articulos: ',()=>{
    it('should get all articulos', (done) => {
    chai.request(url)
    .get('/articulo/get-all')
    .end( function(err,res){
    console.log(res.body);
    expect(res).to.have.status(200);
    done();
    });
    });
   });

   describe('get all farmacia: ',()=>{
    it('should get all farmacia', (done) => {
    chai.request(url)
    .get('/farmacia/get-all')
    .end( function(err,res){
    console.log(res.body);
    expect(res).to.have.status(200);
    done();
    });
    });
   });

   describe('get all usuarios: ',()=>{
    it('should get all usuarios', (done) => {
    chai.request(url)
    .get('/usuario/')
    .end( function(err,res){
    console.log(res.body);
    expect(res).to.have.status(200);
    done();
    });
    });
   });

/*
* Test the POST articulo route
*/
describe('Insert a country: ',()=>{
   it('should insert a country', (done) => {
   chai.request(url)
   .post('/articulo/1')
   .send({Cantidad: 4, IdTipoArticulo: 1, Nombre: "Coco", Precio: 10.05})
   .end( function(err,res){
   console.log(res.body);
   expect(res).to.have.status(404);
   done();
   });
   });
  });

  
  
/*
* Test the DELETE articulo route
*/  

describe('delete the articulo with id 1: ',()=>{
   it('should delete the articulo with id 1', (done) => {
   chai.request(url)
      .delete('/articulo/delete')
      .send({IdArticulo: 20})
      .end( function(err,res){
         expect(res).to.have.status(200);
         done();
      });
   });
  });
