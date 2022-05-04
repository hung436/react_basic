import React, { useState, useEffect } from "react";
import UserLocationForm from "./UserLocationForm";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addAddressId } from "../Auth/userSlice";
import { getAddress, changeAddress } from "../../services/userService";
export default function UserLocal() {
  const dispatch = useDispatch();
  const [address, setAddress] = useState({
    lastname: "",
    fistname: "",
    email: "",
    numberphone: "",
    city: "",
    district: "",
    ward: "",
    street_name: "",
  });

  const formatData = (data) => {
    if (!data) return;
    let adressForm = {
      lastname: data.lastname,
      firstname: data.firstname,
      email: data.email,
      numberphone: data.numberphone,
      city: data.address.city,
      district: data.address.district,
      ward: data.address.ward,
      street_name: data.address.street_name,
    };
    setAddress(adressForm);
  };

  const fetchUserLocation = async () => {
    try {
      const res = await getAddress();

      formatData(res);
      res.address && dispatch(addAddressId(res.address.id));
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (values) => {
    try {
      const res = await changeAddress(values);
      res.errorCode === 0 && toast.success("Cập nhật thông tin thành công!");
    } catch (error) {}
  };

  return <UserLocationForm address={address} onSubmit={handleSubmit} />;
}
