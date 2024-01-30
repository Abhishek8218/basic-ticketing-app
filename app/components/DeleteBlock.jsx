"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
   let text = " Are you Sure, You want to delete this ticket!!!!!"
    if(confirm(text) === true ){
    const res = await fetch(`/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  }
   
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
