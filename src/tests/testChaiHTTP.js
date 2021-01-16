let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';

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


  
  
/*
* Test the DELETE articulo route
*/  

describe('delete the articulo with id 1: ',()=>{
   it('should delete the articulo with id 1', (done) => {
   chai.request(url)
      .delete('/articulo/delete')
      .send({IdArticulo: 25})
      .end( function(err,res){
         expect(res).to.have.status(200);
         done();
      });
   });
  });
  