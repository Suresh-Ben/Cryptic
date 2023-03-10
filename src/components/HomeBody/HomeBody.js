import React from 'react';

import './HomeBody.css'

function HomeBody() {
  return (
    <div className="body row">
      <p className="content col-lg-6">

        <span> What is Cryptic ?</span><br/>
        Cryptic is Lottery contract based on blockchain technology.<br/>
        Anyone can buy tickets with no registration and etc work...<br/>
        When you buy the ticket your Public key will be registered in the Lottery contract and if you wins the lottery, contract will award you on that account.<br/>
        <br/><br/>

        <span> How Cryptic works ? </span><br/>
        A ticket gets generated everytime when a user buys a ticket.<br/>
        Every ticket will have a unique number.<br/>
        When 100 tickets get sold, one of the ticket will be choosen randomly by the contract.<br/>
        The owner of the winning ticket will be awarded with 95 atoms and a 5 atoms will be given to owner of this lottery contract as commision.<br/>
        <br/><br/>

        <span> How to participate ? </span><br/>
        All you need is a metamask account and Atoms (ERC20 token on sepolis Testnet)<br/>
        Buy Atom on <a href="https://atom-faucet.onrender.com/">Atom_Faucet</a><br/>
        Scroll down to buy section or click on buy option on your left sidebar<br/>
        Choose Number of tickets and do the payment, we will connect to metamask and do all the work for you. <br/>
      </p>

      <div className="explain col-lg-6">
        <img src={require('./MyLogo.png')} alt=""/>
      </div>
    </div>
  );
}

export default HomeBody;
