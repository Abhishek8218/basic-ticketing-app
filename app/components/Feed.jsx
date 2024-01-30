import React from "react";

import { faTicket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TicketCard from "./TicketCard";


const getTickets = async () => {
  try {
    const res = await fetch('service-ticketing-app.vercel.app/api/Tickets');

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
      console.log("result",res)
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


const Feed = async () => {
  const data = await getTickets();
console.log("data", data)
  // Make sure we have tickets needed for production build.
 
const tickets = data.tickets;


  const uniqueCategories = [
    ...new Set(data.tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5 ">
      <div>

      {tickets && tickets.length > 0 ? (
  uniqueCategories?.map((uniqueCategory, categoryIndex) => (
    <div key={categoryIndex} className="mb-4">
      <h2>{uniqueCategory}</h2>
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        {tickets
          .filter((ticket) => ticket.category === uniqueCategory)
          .map((filteredTicket, _index) => (
            <TicketCard
              id={_index}
              key={_index}
              ticket={filteredTicket}
            />
          ))}
      </div>
    </div>
  ))
) : (
  <div className="flex items-center content-center justify-center  h-screen">
    <Link href="/TicketPage/new">
      <div className="flex flex-row  gap-3 ">
  <p className="text-3xl ">Create Your Ticket</p>
          <FontAwesomeIcon icon={faTicket} className="icon" size="2xl" />
          </div>
        </Link>
        </div>
)}

          
      </div>
    </div>
  );
};

export default Feed;
