import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <h2>Global Data Chain</h2>
      <p>
        Global Data Chain is a decentralized Sidechain PoC build with the
        <a href="https://lisk.io/sdk"> Lisk SDK</a>. It can be used for storing various scientific
        measurements worldwide. for example:
      </p>
      <ul>
        <li>Global temperatures</li>
        <li>Radioactivity</li>
        <li>Rainfall</li>
        <li>Carbon Dioxide levels</li>
        <li>Noise</li>
        <li>Traffic</li>
      </ul>
      <p>
        These measurements are collected by trusted operators worldwide. With this wide range of collected
        data it is possible to gain insight in past conditions, analyse and predict future conditions and even
        see if there are any correlations between the different data stored on GDC. Various devices can be
        used to perform measurements such as the
        <a href="https://www.uradmonitor.com/products/?sel=4"> uRADMonitor</a>, or a Raspberry pi setup with
        sensors.
      </p>
      <p>
        You can find the source for the server and client on
        <a href="https://github.com/Korben3/Global-Data-Chain"> Github - korben3 - Global-Data-Chain</a>. The
        public API is available at <a href="http://45.32.152.68:4000">45.32.152.68:4000</a>, example call:
        <a href="http://45.32.152.68:4000/api/transactions?sort=timestamp%3Adesc&limit=10">
          View the 10 latest transactions.
        </a>
      </p>
      <p>
        GDC is in its early stages as a Proof of Concept and there are a lot of small and big improvements to
        be made. One of the big changes is the introduction of the
        <b> Proof of Trusted Operators</b> system. To prevent misuse a GDC account holder can only send data
        if:
      </p>
      <blockquote>
        The account is registered as an operator.
        <br />
        And voted on by 2 active operators.
      </blockquote>
      <p>An active operator is someone with an account with at least 10000 tx's of data sent.</p>
      <p>
        Delegates are encouraged to share GDC tokens with anyone serious about sharing data with GDC. New
        operators willing to contribute to GDC will be able to introduce themselves on various community
        channels. After the new operator gains 2 votes and has everything setup, the active operators that
        voted will keep an eye on the new user. If there are any signs of misuse, the new operator can be
        un-voted thus being prevented from sending incorrect data.
      </p>
    </div>
  );
};
export default About;
