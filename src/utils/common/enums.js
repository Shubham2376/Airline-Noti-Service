
const SEAT_TYPE = {
    BUSINESS : 'business',
    ECONOMY : 'economy',
    PREMIUM_ECONOMY : 'premium-economy',
    FIRST_CLASS : 'first-class'
}

const BOOKING_STATUS = {
    BOOKED : 'booked',
    CANCELLED : 'cancelled',
    INITIATED : 'inititated',
    PENDING : 'pending'
}
// There can be more enums which comes so that is why i return as object 
module.exports = {
    SEAT_TYPE,
    BOOKING_STATUS
}