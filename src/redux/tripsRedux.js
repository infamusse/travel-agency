/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if (filters.duration) {
    const from = filters.duration.from;
    const to = filters.duration.to;
    const days = to - from + 1;
    console.log('days', days);
    output = output.filter(trip => trip.days <= days);
  }
  // TODO - filter by tags
  if (filters.tags) {
    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.tags));
  }

  // TODO - sort by cost descending (most expensive goes first)

  const outputSorted = output.sort((a, b) => {
    // console.log("checker", a.cost > b.cost);
    return parseInt(a.cost.replace('$', '')) < parseInt(b.cost.replace('$', ''))
      ? 1
      : -1;
  });

  return outputSorted;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips;

  // TODO - filter trips by tripId
  const filteredTrip = filtered.filter(trip => tripId == trip.id);

  console.log('filtering trips by tripId:', tripId, filteredTrip);
  return filteredTrip.length ? filteredTrip[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips;

  // TODO - filter trips by countryCode
  const filteredCountry = filtered.filter(
    trip => countryCode == trip.country.code
  );

  console.log('filtering trips by countryCode:', countryCode, filteredCountry);
  return filteredCountry.length ? filteredCountry : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
