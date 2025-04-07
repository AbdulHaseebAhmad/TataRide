import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoCompleteAddres, setIdRoute } from "../../Store/google-locations/Actions";
import { setDate, setTime } from "../../Store/Form/Actions";


export default function StepOne() {

  const currentDate = useSelector((state)=>state.form.rideDate);


  const [appendDestination, setAppendDestination] = useState(false);
  const [pickUpType, setPickUpType] = useState("bookForNow");
  const autoCompleteLocations = useSelector((state) => state.location.data);
  const idRoute = useSelector((state) => state.location.idRoute);
  const locationRoute = useSelector((state) => state.location.locationRoute);

  const [currentLocations, setCurrentLocations] = useState([]);
  const [destinationLocations, setDestinationLocations] = useState([]);

  const [currentLocation, setCurrentLoaction] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");

  let [count, setCount] = useState(0);

  const [currentSearch, setCurrentSearch] = useState(false);
  const [destinationSearch, setDestinationSearch] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentLocations(autoCompleteLocations?.currentLocation);
    setDestinationLocations(autoCompleteLocations?.destinationLocation)
    console.log(idRoute);
    console.log(autoCompleteLocations);
    console.log(locationRoute);
  }, [autoCompleteLocations, idRoute, locationRoute])

  const handleChangeEvent = (e) => {
    setCount(count + 1)
    const { value, name } = e.target
    if (name === 'currentLocation') {
      setCurrentLoaction(value);
    }
    if (name === 'destinationLocation') {
      setDestinationLocation(value);
    }

    if (count > 1) {
      setCount(0)
      dispatch(autoCompleteAddres(value, name))
    }
  }

  return (
    <div className="font-sans text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px] pt-[1.8em] px-[1em] flex flex-col gap-[1em]">
      <div className="flex gap-[0.5em] items-center">
        <p className="font-sans font-[400] text-[0.9em] tracking-[0.02em] text-[#000]">
          Step 1 of 4
        </p>
        <p className="font-sans font-[500] text-[1em] tracking-[0.02em] text-[#000]">
          Booking Details
        </p>
      </div>

      <div className="flex flex-col gap-[2em] py-[0.2em]">
        <div className="w-full max-w-[400px] flex gap-[0.5em] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <circle cx="8" cy="8.36365" r="8" fill="#DC4128" />
          </svg>
          <div className="relative w-full">
            <input
              className="px-[0.3em] w-full h-[3em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
              type="text"
              name="currentLocation"
              value={currentLocation}
              placeholder="Add Pickup (required)"
              onChange={handleChangeEvent}
              onFocus={() => { setCurrentSearch(true) }}
            />
            <div className="absolute z-20 h-auto max-h-[10em] bg-white  left-0 right-0 top-full overflow-y-scroll">
              {
                currentSearch && currentLocations?.length > 0 ? currentLocations?.map(({ placePrediction: {
                  placeId,
                  structuredFormat: {
                    mainText = {},
                    secondaryText = {}
                  } = {}
                } = {}
                }, index) => {
                  const text = mainText?.text || "";
                  const sText = secondaryText?.text || "";
                  return (<button type="button" key={index} onClick={() => { setCurrentSearch(false); setCurrentLoaction(`${text}  ${sText}`); dispatch(setIdRoute(placeId, "currentLocation")) }} className="text-start px-[0.3em] w-full py-[0.5em] border-b border-b-1 border-lightgrey rounded-sm flex flex-col justify-center gap-[0.25em] cursor-pointer hover:bg-primary hover:bg-opacity-[0.2]">
                    <p className="font-sans font-[550] text-[1em] tracking-[0.02em] text-primary">{text}</p>
                    <small className="font-sans font-[600] text-[0.7em] tracking-[0.02em] text-lightblack">{sText}</small>
                  </button>
                  )
                }) :
                  currentSearch && <div className="px-[0.3em] w-full h-[3.5em] border-b border-b-1 border-lightgrey rounded-sm flex flex-col justify-center gap-[0.25em] ">
                    <p className="font-sans font-[500] text-[1em] tracking-[0.02em] text-primary">Enter Another Location</p>
                  </div>
              }
            </div>
          </div>
        </div>
        <div className="w-full max-w-[400px] flex gap-[0.5em] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <circle cx="8" cy="8.36365" r="8" fill="gray" />
          </svg>
          <div className="relative w-full">
            <input
              className="px-[0.3em] w-full h-[3em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
              type="text"
              value={destinationLocation}
              name="destinationLocation"
              placeholder="Add Destination (required)"
              onChange={handleChangeEvent}
              onFocus={() => { setDestinationSearch(true) }}
            />
            <div className="absolute z-20 h-auto max-h-[10em] bg-white  left-0 right-0 top-full overflow-y-scroll">
              {
                destinationLocations?.length > 0 && destinationSearch ? destinationLocations?.map(({ placePrediction: {
                  placeId,
                  structuredFormat: {
                    mainText = {},
                    secondaryText = {}
                  } = {}
                } = {}
                }, index) => {
                  const text = mainText?.text || "";
                  const sText = secondaryText?.text || "";
                  return (
                    <button key={index} onClick={() => { setDestinationSearch(false); setDestinationLocation(`${text} ${sText}`); dispatch(setIdRoute(placeId, "destinationLocation"));}} className="text-start px-[0.3em] w-full py-[0.5em] border-b border-b-1 border-lightgrey rounded-sm flex flex-col justify-center gap-[0.25em] cursor-pointer hover:bg-primary hover:bg-opacity-[0.2]">
                      <p className="font-sans font-[550] text-[1em] tracking-[0.02em] text-primary">{text && text}</p>
                      <small className="font-sans font-[600] text-[0.7em] tracking-[0.02em] text-lightblack">{sText && sText}</small>
                    </button>
                  )
                }) :
                  destinationSearch && <div className="px-[0.3em] w-full h-[3.5em] border-b border-b-1 border-lightgrey rounded-sm flex flex-col justify-center gap-[0.25em] ">
                    <p className="font-sans font-[500] text-[1em] tracking-[0.02em] text-primary">Enter Another Location</p>
                  </div>
              }
            </div>
          </div>
        </div>
        {appendDestination && (
          <div className="w-full max-w-[400px] flex gap-[0.5em] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <circle cx="8" cy="8.36365" r="8" fill="gray" />
            </svg>
            <input
              className="px-[0.3em] w-full h-[3em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
              type="text"
              placeholder="Add Destination (required)"
            />
          </div>
        )}
      </div>

      {!appendDestination && (
        <button
          className=" flex gap-[0.5em] items-center py-[0.2em]"
          onClick={() => setAppendDestination(true)}
        >
          <FontAwesomeIcon
            icon={faPlus}
            className="border border-2 border-gray-700 rounded-[100%] p-[0.25em] text-[0.6em] text-gray-700  md:text-[0.65em]"
          />
          <p className="font-sans text-gray-900 text-[0.9em] md:text-[1em] font-[400] tracking-[0.02em]">
            Add a destination
          </p>
        </button>
      )}

      {appendDestination && (
        <button
          className=" flex gap-[0.5em] items-center py-[0.2em]"
          onClick={() => setAppendDestination(false)}
        >
          <FontAwesomeIcon
            icon={faMinus}
            className="border border-2 border-primary rounded-[100%] p-[0.25em] text-[0.6em] text-primary  md:text-[0.65em]"
          />
          <p className="font-sans text-gray-900 text-[0.9em] md:text-[1em] font-[400] tracking-[0.02em]">
            Remove destination
          </p>
        </button>
      )}

      <div className=" flex gap-[0.75em] items-center py-[0.5em]">
        <div className="flex gap-[0.25em] items-center flex-wrap">
          <input
            type="radio"
            className="h-[1.1em] w-[1.1em] cursor-pointer  accent-green-600"
            value="bookForNow"
            onChange={(e) => setPickUpType(e.target.value)}
            checked={pickUpType === 'bookForNow'}
          />
          <p className="font-sans text-[#000] text-[1em] font-[400] tracking-[0.02em]">
            Book for now
          </p>
        </div>
        <div className="flex gap-[0.25em] items-center flex-wrap">
          <input
            type="radio"
            className="h-[1.1em] w-[1.1em] cursor-pointer accent-green-600"
            value="bookForLater"
            onChange={(e) => setPickUpType(e.target.value)}
            checked={pickUpType === 'bookForLater'}

          />
          <p className="font-sans text-[#000] text-[1em] font-[400] tracking-[0.02em]">
            Book for Later
          </p>
        </div>
      </div>

      {
        pickUpType === 'bookForLater' && <div className="w-full max-w-[400px] flex gap-[0.2em] items-start">
          <input
            id="date"
            className="px-[0.3em] w-full h-[2.5em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
            type="date"
            value={currentDate}
            onChange={(e)=>{dispatch(setDate(e.target.value))}}
          />
          <input
            id="cvv"
            className="px-[0.3em] w-full h-[2.5em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
            type="time"
            //value={currentTime}
            onChange={(e)=>{dispatch(setTime(e.target.value))}}

          />
        </div>
      }
    </div>
  );
}
