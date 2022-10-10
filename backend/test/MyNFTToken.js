const { expect } = require("chai");

describe("MyNFTToken contract", function () {
  let MyNFTToken;
  let token721;

  const _name = 'MyNFTToken';
  const _symbol = 'MYC';

  let account1, account2, otherAccounts;

  // Desplegar el contrato
  beforeEach(async function () {
    MyNFTToken = await ethers.getContractFactory("MyNFTToken");
   [owner, account1, account2, ...otherAccounts] = await ethers.getSigners();

    token721 = await MyNFTToken.deploy(_name,_symbol);
  });

  // Iniciar a probar su functionalidad
  describe("MyNFTToken", function () {

    it("Should has the correct name and symbol ", async function () {
      expect(await token721.name()).to.equal(_name);
      expect(await token721.symbol()).to.equal(_symbol);
    });

    it("Should mint a token with token ID 1 & 2 to account1", async function () {
      const address1=account1.address;
      await token721.mintTo(address1);
      expect(await token721.ownerOf(1)).to.equal(address1);

      await token721.mintTo(address1);
      expect(await token721.ownerOf(2)).to.equal(address1);

      expect(await token721.balanceOf(address1)).to.equal(2);      
    });

    it('Can transfer from tokens to another account', async function () {
      const address1 = account1.address
      const address2 = account2.address;

      // mint two tokens to address 1
      await token721.mintTo(address1);
      await token721.mintTo(address1);

      expect(await token721.ownerOf(1)).to.equal(address1);
      expect(await token721.ownerOf(2)).to.equal(address1);
      expect(await token721.balanceOf(address1)).to.equal(2);    

      await token721.connect(account1).transferFrom(address1, address2, 2);
      expect(await token721.ownerOf(2)).to.equal(address2);
      expect(await token721.balanceOf(address2)).to.equal(1);    

      expect(await token721.balanceOf(address1)).to.equal(1);    
    });
  
    it('Can approve transfers to another account', async function () {
      const address1 = account1.address
      const address2 = account2.address;

      // mint two tokens to address 1
      await token721.mintTo(address1);
      await token721.mintTo(address1);

      expect(await token721.ownerOf(1)).to.equal(address1);
      expect(await token721.ownerOf(2)).to.equal(address1);
      expect(await token721.balanceOf(address1)).to.equal(2);    


      // aprobamos el token para el account 2
      await token721.connect(account1).approve(address2, 2);

      // validamos que el account 2 tiene el approval para transferir el token
      expect(await token721.getApproved(2)).to.equal(address2);    

      await token721.connect(account2).transferFrom(address1, address2, 2);
      expect(await token721.ownerOf(2)).to.equal(address2);
      expect(await token721.balanceOf(address2)).to.equal(1);    

      expect(await token721.balanceOf(address1)).to.equal(1);   
    });
  })
});