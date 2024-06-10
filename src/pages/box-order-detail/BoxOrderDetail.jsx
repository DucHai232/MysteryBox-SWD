import React, { useEffect, useState } from "react";
import "./BoxOrderDetail.css";
import Header from "../../components/header/Header";
import { useLocation, useParams } from "react-router-dom";
import {
  getAllPackageInPeriods,
  getPackageInPeriodByPackageOrderId,
} from "../../apis/packageInPeriod.request";
import { getBox } from "../../apis/box.request";
import { openRandomProduct } from "../../apis/product.request";
import { getPackageOrderByIdPk } from "../../apis/packageOrder.request";

const BoxOrderDetail = () => {
  const { id } = useParams();
  const [boxData, setBoxData] = useState([]);
  const [periodBox, setPeriodBox] = useState();
  const [packageOrder, setPackageOrder] = useState([]);
  const [packageInPeriods, setPackageInPeriods] = useState([]);
  const [packageInPeriod, setPackageInPeriod] = useState([]);
  const [openDataProduct, setDataOpenProduct] = useState({});
  const [isOpenProduct, setIsOpenProduct] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getPackageInPeriodByPackageOrderId(id);
  //       const boxs = await getBox();
  //       setBoxData(
  //         boxs.data.mysteryBoxs.filter(
  //           (box) => box.id === response.data.packageInPeriod[0].boxId
  //         )
  //       );
  //       setPeriodBox(response.data.packageInPeriod[0]);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   const fetchPackageOrderByIdPk = async () => {
  //     try {
  //       const apiPackageOrder = await getPackageOrderByIdPk(id);
  //       setPackageOrder(apiPackageOrder?.data.packageOrder);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   const fetchPackageInPeriod = async () => {
  //     try {
  //       const apipackageInPeriods = await getAllPackageInPeriods();
  //       setPackageInPeriods(apipackageInPeriods?.data?.packageInPeriods);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchPackageInPeriod();
  //   fetchPackageOrderByIdPk();
  //   fetchData();
  //   const handleDataBox = async () => {
  //     const data = await packageInPeriods.filter((item) => {
  //       if (id == item.packageOrderId) {
  //         return item;
  //       }
  //     });
  //     setPackageInPeriod(data);
  //   };

  //   handleDataBox();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPackageInPeriodByPackageOrderId(id);
        const boxs = await getBox();
        setBoxData(
          boxs.data.mysteryBoxs.filter(
            (box) => box.id === response.data.packageInPeriod[0].boxId
          )
        );
        setPeriodBox(response.data.packageInPeriod[0]);
        const apiPackageOrder = await getPackageOrderByIdPk(id);
        setPackageOrder(apiPackageOrder?.data.packageOrder);

        const apipackageInPeriods = await getAllPackageInPeriods();
        setPackageInPeriods(apipackageInPeriods?.data?.packageInPeriods);

        const data = apipackageInPeriods?.data?.packageInPeriods.filter(
          (item) => {
            return item.packageOrderId == id;
          }
        );
        data.sort(
          (a, b) =>
            new Date(a.InvitesApplications[0]?.createdAt) -
            new Date(b.InvitesApplications[0]?.createdAt)
        );
        setPackageInPeriod(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleOpenProduct = () => {
    setIsOpenProduct((prev) => !prev);
    const fetchData = async () => {
      const bodyOpenProduct = {
        color: "",
        origin: "",
        gender: "",
        material: "",
      };
      const response = await openRandomProduct(bodyOpenProduct);
      setDataOpenProduct(response.data);
    };
    fetchData();
  };
  console.log(periodBox);
  return (
    <>
      <Header />
      <div className="boxOrderDetail-container">
        <h1>Các hộp quà bí ẩn</h1>
        <div className="boxs-container">
          {boxData.map((box) => (
            <div className="box">
              <img src={box.image} className="image" />
              <div className="description">
                <ul>
                  <li>{box.name}</li>
                  <li>{box.description}</li>
                  <li>
                    <img src={box.qrCode} className="qrcode" />{" "}
                  </li>
                </ul>
              </div>
              {!periodBox.productId && (
                <button className="button-open-product">Mở quà</button>
              )}
            </div>
          ))}
        </div>
        <div className="choose-box">
          {periodBox?.productId && (
            <button className="btn-choose-box">Chọn hộp quà tiếp theo</button>
          )}
        </div>
      </div>
      {/* {packageOrder.packageInPeriodIds?.map((item) => {
        const matchedElement = packageInPeriod.find((el) => el.id === item);
        if (matchedElement) {
          return <div key={item}>{matchedElement.id}</div>;
        } else {
          return <div key={item}>aaa</div>;
        }
      })} */}
    </>
  );
};

export default BoxOrderDetail;
