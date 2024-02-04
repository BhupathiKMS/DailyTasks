import React from "react";
import Card from "./components/Card";
import data from "./assets/testData";

function App() {
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((e) => {
              return (
                <Card
                  title={e.title}
                  charge={e.charge}
                  maxUser={e.maxUser}
                  _50GbStorage={e._50GbStorage}
                  unlimitedPublicProjects={e.unlimitedPublicProjects}
                  communityAccess={e.communityAccess}
                  unlimitedPrivateProjects={e.unlimitedPrivateProjects}
                  dedicatedPhoneSupport={e.dedicatedPhoneSupport}
                  freeSubdomain={e.freeSubdomain}
                  monthlyStatusReports={e.monthlyStatusReports}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
