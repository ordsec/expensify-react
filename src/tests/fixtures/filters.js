import moment from 'moment';

export const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endBill: undefined
};

export const altFilters = {
  text: 'bill',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};
