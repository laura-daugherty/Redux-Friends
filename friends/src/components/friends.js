import React from "react";
import { connect } from "react-redux";
// import moment from "moment";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";

import { getData } from "../actions";

class Friends extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  // formatData = () => {
  //   const formattedData = [];
  //   this.props.gasPrices.forEach((price, index, arr) => {
  //     if (price.location === "US") {
  //       formattedData.push({
  //         date: moment(price.date).format("MMM"),
  //         USPrice: price.price,
  //         HawaiiPrice: arr[index + 1].price
  //       });
  //     }
  //   });
  //   return formattedData;
  // };

  render() {
    // const friends = this.formatData();
    const friends = this.props.friends
    return (
      <div className="friendList">
        {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {this.props.error && <h4>{this.props.error}</h4>}
        {!this.fetchingData && friends.length > 0 && (
          <div className="friend-wrapper">
            <div>
              {friends.map(friend => (
                  <div className="name">
                    <p>{friend.name}</p>
                  </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ error, friends, fetchingData }) => ({
  error,
  friends,
  fetchingData
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(Friends)
);
