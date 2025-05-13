import Reservation from '../controllers/ReservationController'

export function calculateReservationDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffMs = end - start;

  return diffMs / (1000 * 60 * 60 * 24); // para retornar em dias
}

export function calculateTotalPrice(startDate, endDate, dailyPrice) {
  const days = calculateReservationDays(startDate, endDate);
  return days * dailyPrice;
}
