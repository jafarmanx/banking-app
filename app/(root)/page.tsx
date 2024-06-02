import React from "react";
import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "../../components/TotalBalanceBox";
import RightSidebar from "../../components/RightSidebar";

 function Home() {
  const loggedIn = {firstName: 'Ahsen'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access your account information and make transactions."
          />
          <TotalBalanceBox 
            accounts= {[]}
            totalBanks={1}
            totalCurrentBalance={1230.35}
          
          />
        </header> 
        Recent Transactions
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[]}
      ></RightSidebar>

    </section>
  );
}

export default Home;