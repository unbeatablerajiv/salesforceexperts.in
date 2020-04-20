import React, { useState, useEffect } from "react";
import { formatDistance, format } from "date-fns";
import axios from "axios";

const Covid = ({ isWrapper }) => {
  const [updates, setUpdates] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched === false) {
      axios
        .get("https://api.covid19india.org/updatelog/log.json")
        .then((response) => {
          setUpdates(response.data);
          setFetched(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [fetched]);

  const renderUpdates = () => {
    let covidUpdates = isWrapper
      ? updates.sort((a, b) => b.timestamp - a.timestamp)
      : updates.slice(-5).reverse();

    return covidUpdates.map(function(activity, index) {
      activity.update = activity.update.replace("\n", "<br/>");
      return (
        <div key={index} className="update">
          <h5>
            {formatDistance(new Date(activity.timestamp * 1000), new Date()) +
              " ago"}
          </h5>
          <h4
            dangerouslySetInnerHTML={{
              __html: activity.update,
            }}
          ></h4>
        </div>
      );
    });
  };

  return (
    <div className="front-page">
      <div className="updates-header">
        {isWrapper ? (
          <h2>
            COVID19 India updates <strong>*</strong>
          </h2>
        ) : null}
      </div>

      <div className="updates">{renderUpdates()}</div>
      <div>
        <strong>*</strong> Records may not be accurate
      </div>
    </div>
  );
};

export default Covid;
