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

