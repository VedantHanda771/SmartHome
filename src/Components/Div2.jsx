import React from 'react'
import { useState } from 'react'
import '../Css/Div2.css'
const Div2 = ({ content }) => {
  return (
    <>
    <div  className="wrapper">
      <img
        className="vector-smart-object-double-click-to-edit"
        src="images/vector_smart_object_doubl_5.png"
        alt=""
        width={240}
        height={539}
      />
      <img
        className="vector-smart-object-double-click-to-edit-2"
        src="images/vector_smart_object_doubl_6.png"
        alt=""
        width={222}
        height={1053}
      />
      <img
        className="vector-smart-object-double-click-to-edit-3"
        src="images/vector_smart_object_doubl_7.png"
        alt=""
        width={308}
        height={539}
      />
      <img
        className="vector-smart-object-double-click-to-edit-4"
        src="images/vector_smart_object_doubl_8.png"
        alt=""
        width={255}
        height={1053}
      />
      <div id='2'  className="group-4">
        <div className="card">
          <div className="rounded-rectangle-holder">
            <div className="button" />
          </div>
          <div className="rounded-rectangle-holder-2">
            <div className="button-2" />
          </div>
          <div className="rounded-rectangle-holder-3">
            <div className="button-3" />
          </div>
          <div className="image group">
            <img
              className="vector-smart-object-double-click-to-edit-5"
              src="images/vector_smart_object_doubl_16.png"
              alt=""
              width={246}
              height={289}
            />
            <img
              className="vector-smart-object-double-click-to-edit-6"
              src="images/vector_smart_object_doubl_15.png"
              alt=""
              width={329}
              height={233}
            />
            <img
              className="vector-smart-object-double-click-to-edit-7"
              src="images/vector_smart_object_doubl_14.png"
              alt=""
              width={244}
              height={289}
            />
          </div>
        </div>
        <div className="text">
          <p className="title">SECURITY MODE TYPE</p>
          <div className="subtitle group">
            <p className="sub">TYPE A</p>
            <p className="sub-2">TYPE B</p>
            <p className="sub-3">TYPE C</p>
          </div>
          <div className="body-text group">
            <div className="row-4 match-height group">
            <div>
      {content.map((item, index) => (
        <div className={`col-${item.column}`} key={index}>
          <p className={`body-text-${item.textClass}`}>
            {item.text}
          </p>
          <button className={`button-body-text-${item.buttonClass}`}>
            {item.buttonText}
          </button>
        </div>
      ))}
    </div>
            </div>
            <p className="body-text-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="group-3">
        <div className="row no-space-between-inline-blocks">
          <img
            className="shape-3"
            src="images/shape_3.png"
            alt=""
            width={158}
            height={150}
          />
          <img
            className="shape-2"
            src="images/shape_2.png"
            alt=""
            width={169}
            height={177}
          />
          <img
            className="shape-4"
            src="images/shape_4.png"
            alt=""
            width={165}
            height={127}
          />
        </div>
        <div className="text-2 match-height group">
          <div className="col-5">
            <p className="sub-4">SECURTY SYSTEM</p>
            <p className="body-text-9">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt
            </p>
          </div>
          <div className="col-6">
            <p className="sub-5">SMART LAMP</p>
            <p className="body-text-10">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt
            </p>
          </div>
          <div className="col-7">
            <p className="sub-6">CCTV CONTROL</p>
            <p className="body-text-11">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
      <div className="row-100 group">
        <div className="col-19">
          <p className="sub-7">
            FUTURE
            <br />
            IS NOW
          </p>
          <p className="title-4">SMART HOME</p>
          <p className="body-text-29">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <button className="button-holder-2">See More</button>
        </div>
        <img
          className="vector-smart-object-double-click-to-edit-17"
          src="images/vector_smart_object_doubl_17.png"
          alt=""
          width={546}
          height={540}
        />
      </div>
      <img
        className="vector-smart-object-double-click-to-edit-8"
        src="images/vector_smart_object_doubl_17.png"
        alt=""
        width={649}
        height={815}
      />
      <p className="body-text-12">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.”
      </p>
      <p className="subtitle-2">Security System</p>
      <p className="title-2">SMART HOME</p>
    </div>


    </>
  )
}

export default Div2
