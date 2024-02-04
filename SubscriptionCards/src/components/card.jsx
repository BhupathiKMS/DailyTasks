import React from "react";

function isChecked(val, class1, class2) {
  return val ? class1 : class2;
}
function Card({
  title,
  charge,
  maxUser,
  _50GbStorage,
  unlimitedPublicProjects,
  communityAccess,
  unlimitedPrivateProjects,
  dedicatedPhoneSupport,
  freeSubdomain,
  monthlyStatusReports,
}) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {title}
            </h5>
            <h6 className="card-price text-center">${charge}/month</h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i
                    className={isChecked(
                      maxUser,
                      "fas fa-check",
                      "fas fa-times"
                    )}
                  ></i>
                </span>
                {maxUser}
              </li>
              <li className={isChecked(_50GbStorage, "", "text-muted")}>
                <span className="fa-li">
                  <i
                    className={isChecked(
                      _50GbStorage,
                      "fas fa-check",
                      "fas fa-times"
                    )}
                  ></i>
                </span>
                50GB Storage
              </li>
              <li
                className={isChecked(unlimitedPublicProjects, "", "text-muted")}
              >
                <span className="fa-li">
                  <i
                    className={isChecked(
                      unlimitedPublicProjects,
                      "fas fa-check",
                      "fas fa-times"
                    )}
                  ></i>
                </span>
                Unlimited Public Projects
              </li>
              <li className={isChecked(communityAccess, "", "text-muted")}>
                <span className="fa-li">
                  <i
                    className={isChecked(
                      communityAccess,
                      "fas fa-check",
                      "fas fa-times"
                    )}
                  ></i>
                </span>
                Community Access
              </li>
              <li
                className={isChecked(
                  unlimitedPrivateProjects,
                  "",
                  "text-muted"
                )}
              >
                <span className="fa-li">
                  <i
                    className={isChecked(
                      unlimitedPrivateProjects,
                      "fas fa-check",
                      "fas fa-times"
                    )}
                  ></i>
                </span>
                Unlimited Private Projects
              </li>
              <li
                className={isChecked(dedicatedPhoneSupport, "", "text-muted")}
              >
                <span className="fa-li">
                  <i
                    className={isChecked(
                      dedicatedPhoneSupport,
                      "fas fa-check",
                      "fas fa-times"
                    )}
                  ></i>
                </span>
                Dedicated Phone Support
              </li>
              <li className={isChecked(freeSubdomain, "", "text-muted")}>
                <span className="fa-li">
                  <i
                    className={isChecked(
                      freeSubdomain,
                      "fas fa-check",
                      "fas fa-times"
                    )}
                  ></i>
                </span>
                Free Subdomain
              </li>
              <li className={isChecked(monthlyStatusReports, "", "text-muted")}>
                <span className="fa-li">
                  <i
                    className={isChecked(
                      monthlyStatusReports,
                      "fas fa-check",
                      "fas fa-times"
                    )}
                  ></i>
                </span>
                Monthly Status Reports
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
