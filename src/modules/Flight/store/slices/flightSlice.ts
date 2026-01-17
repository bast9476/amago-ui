import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Flight } from '../../screens/AvailableFilght/components/FlightCard';

// Import logo images
const logo1 = require('../../screens/AvailableFilght/assets/imagewithfallback.png');
const logo2 = require('../../screens/AvailableFilght/assets/imagewithfallback-2.png');
const logo3 = require('../../screens/AvailableFilght/assets/imagewithfallback-3.jpeg');
const logo4 = require('../../screens/AvailableFilght/assets/imagewithfallback-4.png');

export type FlightTripType = 'one-way' | 'round-trip' | 'multi-city';
export type FareType = 'regular' | 'student' | 'business';
export type CabinClass = 'economy' | 'premium-economy' | 'business' | 'first';

export interface CabinClassOption {
  id: CabinClass;
  name: string;
  description: string;
}

export interface FareTypeOption {
  id: FareType;
  label: string;
}

export interface Airport {
  city: string;
  country: string;
  airportName: string;
  code: string;
}

export interface RecentAirport {
  code: string;
  city: string;
}

export interface SearchParameters {
  route: string;
  date: string;
  travelers: string;
  tripType?: FlightTripType;
}

export interface Airline {
  id: string;
  name: string;
  logo: any;
  flightCount: number;
}

export interface DepartureTimeSlot {
  id: 'early-morning' | 'morning' | 'afternoon' | 'evening';
  label: string;
  timeRange: string;
}

export interface Airline {
  id: string;
  name: string;
  logo: any;
  flightCount: number;
}

export interface DepartureTimeSlot {
  id: 'early-morning' | 'morning' | 'afternoon' | 'evening';
  label: string;
  timeRange: string;
}

export interface FlightFilters {
  // Stops
  stops: {
    nonstop: boolean;
    oneStop: boolean;
    twoPlusStops: boolean;
  };
  // Airlines
  selectedAirlines: string[]; // Array of airline IDs
  // Price Range
  priceRange: {
    min: number;
    max: number;
  };
  // Duration
  maxDuration: number; // in hours
  // Departure Time
  departureTimeSlots: string[]; // Array of departure time slot IDs
  // Additional Options
  baggageIncluded: boolean;
  refundable: boolean;
  noOvernightLayover: boolean;
  // Legacy fields (for backward compatibility)
  nonstopOnly?: boolean;
  earlyMorning?: boolean;
  lateNight?: boolean;
  recommended?: boolean;
}

export interface FareOptionAmenity {
  label: string;
  included: boolean;
  detail?: string;
}

export interface FareOption {
  id: 'economy' | 'premium-economy' | 'business';
  name: string;
  amenities: FareOptionAmenity[];
  priceDelta: string;
  currency: string;
  isSelected?: boolean;
}

export interface FlightDetails {
  fareOptions: FareOption[];
  baggage: {
    description: string;
  };
  co2Emissions: {
    amount: string;
    isLower: boolean;
  };
}

export interface SeatMapConfig {
  rows: string[];
  leftSeats: string[];
  rightSeats: string[];
  occupiedSeatIds: string[];
  availableSeatIds: string[];
  exitRowSeatIds: string[];
}

export interface SeatSelectionState {
  selectedSeatId: string;
  extraBaggage: number;
}

export interface FlightState {
  availableFlights: Flight[];
  selectedFlightId: string | null;
  searchParameters: SearchParameters;
  filters: FlightFilters;
  flightCount: number;
  updateTime: string;
  priceDropPercent: number;
  activeFilters: string[];
  airports: Airport[];
  recentAirports: RecentAirport[];
  airlines: Airline[];
  departureTimeSlots: DepartureTimeSlot[];
  // Shared UI data/constants (stored in Redux per project convention)
  weekDaysShort: string[];
  monthNamesLong: string[];
  dayNamesShort: string[];
  monthNamesShort: string[];
  lowerPriceDates: number[];
  homeFilters: string[];
  availableFilterButtons: string[];
  cabinClasses: CabinClassOption[];
  tripTypes: FlightTripType[];
  fareTypes: FareTypeOption[];
  flightDetails: Record<string, FlightDetails>;
  seatMap: SeatMapConfig;
  seatSelection: SeatSelectionState;
}

const mockFlights: Flight[] = [
  {
    id: '1',
    airline: 'Biman Bangladesh',
    flightNumber: 'BG 148',
    logo: logo1,
    badge: { type: 'cheapest', label: 'Cheapest' },
    departure: { time: '08:00', code: 'DAC' },
    arrival: { time: '09:00', code: 'CGP' },
    duration: '1h 0m',
    stops: 'Nonstop',
    onTimePercent: 92,
    price: '5000',
    currency: 'BDT',
    points: 250,
    isSelected: true,
  },
  {
    id: '2',
    airline: 'US-Bangla',
    flightNumber: 'BS 331',
    logo: logo2,
    badge: { type: 'recommended', label: 'Recommended' },
    departure: { time: '10:30', code: 'DAC' },
    arrival: { time: '11:30', code: 'CGP' },
    duration: '1h 0m',
    stops: 'Nonstop',
    onTimePercent: 88,
    price: '5200',
    currency: 'BDT',
    points: 260,
  },
  {
    id: '3',
    airline: 'Novoair',
    flightNumber: 'VQ 912',
    logo: logo3,
    departure: { time: '14:15', code: 'DAC' },
    arrival: { time: '15:15', code: 'CGP' },
    duration: '1h 0m',
    stops: 'Nonstop',
    onTimePercent: 85,
    price: '5400',
    currency: 'BDT',
    points: 270,
  },
  {
    id: '4',
    airline: 'Regent Airways',
    flightNumber: 'RX 771',
    logo: logo4,
    badge: { type: 'few-seats-left', label: 'Few seats left' },
    departure: { time: '06:30', code: 'DAC' },
    arrival: { time: '12:40', code: 'CGP' },
    duration: '1h 30m',
    stops: '1 stop (JSR 1h 10m)',
    onTimePercent: 78,
    price: '4200',
    currency: 'BDT',
    points: 210,
  },
  {
    id: '5',
    airline: 'Biman Bangladesh',
    flightNumber: 'BG 152',
    logo: logo1,
    departure: { time: '16:45', code: 'DAC' },
    arrival: { time: '17:45', code: 'CGP' },
    duration: '1h 0m',
    stops: 'Nonstop',
    onTimePercent: 90,
    price: '5100',
    currency: 'BDT',
    points: 255,
  },
];

const seatRows = ['1', '2', '3', '4', '5', '6', '7'];
const seatLeftColumns = ['A', 'B', 'C'];
const seatRightColumns = ['D', 'E', 'F'];
const seatOccupiedIds = ['1B', '2A', '3E', '4C', '5D', '6A'];

const buildSeatMap = (): SeatMapConfig => {
  const columns = [...seatLeftColumns, ...seatRightColumns];
  const availableSeatIds: string[] = [];
  const exitRowSeatIds: string[] = [];

  ['1', '2'].forEach((row) => {
    columns.forEach((col) => {
      const seatId = `${row}${col}`;
      if (!seatOccupiedIds.includes(seatId)) {
        availableSeatIds.push(seatId);
      }
    });
  });

  columns.forEach((col) => {
    const seatId = `3${col}`;
    if (!seatOccupiedIds.includes(seatId)) {
      exitRowSeatIds.push(seatId);
    }
  });

  return {
    rows: seatRows,
    leftSeats: seatLeftColumns,
    rightSeats: seatRightColumns,
    occupiedSeatIds: seatOccupiedIds,
    availableSeatIds,
    exitRowSeatIds,
  };
};

const mockAirports: Airport[] = [
  { city: 'Dhaka', country: 'Bangladesh', airportName: 'Hazrat Shahjalal International Airport', code: 'DAC' },
  { city: 'Chittagong', country: 'Bangladesh', airportName: 'Shah Amanat International Airport', code: 'CGP' },
  { city: 'Jessore', country: 'Bangladesh', airportName: 'Jessore Airport', code: 'JSR' },
  { city: 'Saidpur', country: 'Bangladesh', airportName: 'Saidpur Airport', code: 'SPD' },
  { city: 'Dubai', country: 'UAE', airportName: 'Dubai International Airport', code: 'DXB' },
  { city: 'Doha', country: 'Qatar', airportName: 'Hamad International Airport', code: 'DOH' },
  { city: 'Kuala Lumpur', country: 'Malaysia', airportName: 'Kuala Lumpur International Airport', code: 'KUL' },
  { city: 'Bangkok', country: 'Thailand', airportName: 'Suvarnabhumi Airport', code: 'BKK' },
];

const mockRecentAirports: RecentAirport[] = [
  { code: 'DAC', city: 'Dhaka' },
  { code: 'CGP', city: 'Chittagong' },
  { code: 'DXB', city: 'Dubai' },
  { code: 'DOH', city: 'Doha' },
];

const weekDaysShort = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const monthNamesLong = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Dates with lower prices (green background) - October 2025
// Note: Selected date takes priority over lower price styling
const lowerPriceDates = [
  1, 3, 7, 9, 13, 15, 19, 21, 25, 27, 31, // October 2025
];

const homeFilters = ['Nonstop only', 'Baggage included', 'Refundable'];

const availableFilterButtons = ['Nonstop', 'Baggage', 'Refundable', 'Airlines', 'Currency'];

// Mock airlines data
const mockAirlines: Airline[] = [
  {
    id: 'biman-bangladesh',
    name: 'Biman Bangladesh',
    logo: logo1,
    flightCount: 8,
  },
  {
    id: 'us-bangla',
    name: 'US-Bangla',
    logo: logo2,
    flightCount: 6,
  },
  {
    id: 'novoair',
    name: 'Novoair',
    logo: logo3,
    flightCount: 4,
  },
];

// Departure time slots
const mockDepartureTimeSlots: DepartureTimeSlot[] = [
  { id: 'early-morning', label: 'Early morning', timeRange: '00:00 - 06:00' },
  { id: 'morning', label: 'Morning', timeRange: '06:00 - 12:00' },
  { id: 'afternoon', label: 'Afternoon', timeRange: '12:00 - 18:00' },
  { id: 'evening', label: 'Evening', timeRange: '18:00 - 00:00' },
];

const cabinClasses: CabinClassOption[] = [
  { id: 'economy', name: 'Economy', description: 'Standard seating' },
  { id: 'premium-economy', name: 'Premium Economy', description: 'Extra legroom & amenities' },
  { id: 'business', name: 'Business', description: 'Priority service & comfort' },
  { id: 'first', name: 'First', description: 'Luxury experience' },
];

const tripTypes: FlightTripType[] = ['one-way', 'round-trip', 'multi-city'];

const fareTypes: FareTypeOption[] = [
  { id: 'regular', label: 'Regular' },
  { id: 'student', label: 'Student' },
  { id: 'business', label: 'Business' },
];

// Mock flight details data
const mockFlightDetails: Record<string, FlightDetails> = {
  '1': {
    fareOptions: [
      {
        id: 'economy',
        name: 'Economy',
        amenities: [
          { label: 'Carry-on bag', included: true, detail: '7kg' },
          { label: 'Checked bag', included: true, detail: '20kg' },
          { label: 'Seat selection', included: false },
          { label: 'Changes', included: false },
          { label: 'Refundable', included: false },
        ],
        priceDelta: '0',
        currency: 'BDT',
        isSelected: true,
      },
      {
        id: 'premium-economy',
        name: 'Premium Economy',
        amenities: [
          { label: 'Carry-on bag', included: true, detail: '10kg' },
          { label: 'Checked bag', included: true, detail: '30kg' },
          { label: 'Seat selection', included: true, detail: 'Free' },
          { label: 'Changes', included: true, detail: '500 BDT fee' },
          { label: 'Refundable', included: false },
        ],
        priceDelta: '500',
        currency: 'BDT',
      },
      {
        id: 'business',
        name: 'Business',
        amenities: [
          { label: 'Carry-on bag', included: true, detail: '15kg' },
          { label: 'Checked bag', included: true, detail: '40kg' },
          { label: 'Seat selection', included: true, detail: 'Free priority' },
          { label: 'Changes', included: true, detail: 'Free' },
          { label: 'Refundable', included: true, detail: 'Full refund' },
        ],
        priceDelta: '3500',
        currency: 'BDT',
      },
    ],
    baggage: {
      description: '1 carry-on • 1 checked (20kg) included',
    },
    co2Emissions: {
      amount: '45kg',
      isLower: true,
    },
  },
  '2': {
    fareOptions: [
      {
        id: 'economy',
        name: 'Economy',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: 'No checked bag', included: false },
          { label: 'No changes', included: false },
        ],
        priceDelta: '5200',
        currency: 'BDT',
        isSelected: true,
      },
      {
        id: 'premium-economy',
        name: 'Premium Economy',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: '1 checked bag', included: true },
          { label: 'Free changes', included: true },
        ],
        priceDelta: '5700',
        currency: 'BDT',
      },
      {
        id: 'business',
        name: 'Business',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: '2 checked bags', included: true },
          { label: 'Free refund', included: true },
        ],
        priceDelta: '6400',
        currency: 'BDT',
      },
    ],
    baggage: {
      description: '1 carry-on, 1 checked included',
    },
    co2Emissions: {
      amount: '45kg',
      isLower: true,
    },
  },
  '3': {
    fareOptions: [
      {
        id: 'economy',
        name: 'Economy',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: 'No checked bag', included: false },
          { label: 'No changes', included: false },
        ],
        priceDelta: '5400',
        currency: 'BDT',
        isSelected: true,
      },
      {
        id: 'premium-economy',
        name: 'Premium Economy',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: '1 checked bag', included: true },
          { label: 'Free changes', included: true },
        ],
        priceDelta: '5900',
        currency: 'BDT',
      },
      {
        id: 'business',
        name: 'Business',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: '2 checked bags', included: true },
          { label: 'Free refund', included: true },
        ],
        priceDelta: '6600',
        currency: 'BDT',
      },
    ],
    baggage: {
      description: '1 carry-on, 1 checked included',
    },
    co2Emissions: {
      amount: '45kg',
      isLower: true,
    },
  },
  '4': {
    fareOptions: [
      {
        id: 'economy',
        name: 'Economy',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: 'No checked bag', included: false },
          { label: 'No changes', included: false },
        ],
        priceDelta: '4200',
        currency: 'BDT',
        isSelected: true,
      },
      {
        id: 'premium-economy',
        name: 'Premium Economy',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: '1 checked bag', included: true },
          { label: 'Free changes', included: true },
        ],
        priceDelta: '4700',
        currency: 'BDT',
      },
      {
        id: 'business',
        name: 'Business',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: '2 checked bags', included: true },
          { label: 'Free refund', included: true },
        ],
        priceDelta: '5400',
        currency: 'BDT',
      },
    ],
    baggage: {
      description: '1 carry-on, 1 checked included',
    },
    co2Emissions: {
      amount: '45kg',
      isLower: true,
    },
  },
  '5': {
    fareOptions: [
      {
        id: 'economy',
        name: 'Economy',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: 'No checked bag', included: false },
          { label: 'No changes', included: false },
        ],
        priceDelta: '5100',
        currency: 'BDT',
        isSelected: true,
      },
      {
        id: 'premium-economy',
        name: 'Premium Economy',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: '1 checked bag', included: true },
          { label: 'Free changes', included: true },
        ],
        priceDelta: '5600',
        currency: 'BDT',
      },
      {
        id: 'business',
        name: 'Business',
        amenities: [
          { label: 'Carry-on', included: true },
          { label: '2 checked bags', included: true },
          { label: 'Free refund', included: true },
        ],
        priceDelta: '6300',
        currency: 'BDT',
      },
    ],
    baggage: {
      description: '1 carry-on, 1 checked included',
    },
    co2Emissions: {
      amount: '45kg',
      isLower: true,
    },
  },
};

const initialState: FlightState = {
  availableFlights: mockFlights,
  selectedFlightId: '1',
  searchParameters: {
    route: 'DAC → CGP',
    date: 'Thu, Oct 9',
    travelers: '1 traveler, Economy',
    tripType: 'round-trip',
  },
  filters: {
    stops: {
      nonstop: false,
      oneStop: false,
      twoPlusStops: false,
    },
    selectedAirlines: [],
    priceRange: {
      min: 0,
      max: 10000,
    },
    maxDuration: 12,
    departureTimeSlots: [],
    baggageIncluded: false,
    refundable: false,
    noOvernightLayover: false,
    // Legacy fields
    nonstopOnly: false,
    earlyMorning: false,
    lateNight: false,
    recommended: false,
  },
  airlines: mockAirlines,
  departureTimeSlots: mockDepartureTimeSlots,
  flightCount: 5,
  updateTime: 'Updated just now',
  priceDropPercent: 7,
  activeFilters: ['Nonstop only', 'Baggage included', 'Refundable', 'Early morning', 'Late night'],
  airports: mockAirports,
  recentAirports: mockRecentAirports,
  flightDetails: mockFlightDetails,
  seatMap: buildSeatMap(),
  seatSelection: {
    selectedSeatId: '1C',
    extraBaggage: 0,
  },
  weekDaysShort,
  monthNamesLong,
  dayNamesShort,
  monthNamesShort,
  lowerPriceDates,
  homeFilters,
  availableFilterButtons,
  cabinClasses,
  tripTypes,
  fareTypes,
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setSelectedFlight: (state, action: PayloadAction<string>) => {
      state.selectedFlightId = action.payload;
      // Update isSelected flag for all flights
      state.availableFlights = state.availableFlights.map((flight) => ({
        ...flight,
        isSelected: flight.id === action.payload,
      }));
    },
    updateSearchParameters: (state, action: PayloadAction<Partial<SearchParameters>>) => {
      state.searchParameters = {
        ...state.searchParameters,
        ...action.payload,
      };
    },
    updateFilters: (state, action: PayloadAction<Partial<FlightFilters>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    setActiveFilters: (state, action: PayloadAction<string[]>) => {
      state.activeFilters = action.payload;
    },
    updateFlightCount: (state, action: PayloadAction<number>) => {
      state.flightCount = action.payload;
    },
    updatePriceDropPercent: (state, action: PayloadAction<number>) => {
      state.priceDropPercent = action.payload;
    },
    setSelectedFareOption: (
      state,
      action: PayloadAction<{ flightId: string; fareOptionId: FareOption['id'] }>
    ) => {
      const { flightId, fareOptionId } = action.payload;
      const details = state.flightDetails[flightId];
      if (!details) return;
      details.fareOptions = details.fareOptions.map((option) => ({
        ...option,
        isSelected: option.id === fareOptionId,
      }));
    },
    setAvailableFlights: (state, action: PayloadAction<Flight[]>) => {
      state.availableFlights = action.payload.map((flight) => ({
        ...flight,
        isSelected: flight.id === state.selectedFlightId,
      }));
      state.flightCount = action.payload.length;
    },
    clearSelectedFlight: (state) => {
      state.selectedFlightId = null;
      state.availableFlights = state.availableFlights.map((flight) => ({
        ...flight,
        isSelected: false,
      }));
    },
    setSelectedSeat: (state, action: PayloadAction<string>) => {
      state.seatSelection.selectedSeatId = action.payload;
    },
    incrementExtraBaggage: (state) => {
      state.seatSelection.extraBaggage += 1;
    },
    decrementExtraBaggage: (state) => {
      state.seatSelection.extraBaggage = Math.max(0, state.seatSelection.extraBaggage - 1);
    },
  },
});

export const {
  setSelectedFlight,
  updateSearchParameters,
  updateFilters,
  setActiveFilters,
  updateFlightCount,
  updatePriceDropPercent,
  setSelectedFareOption,
  setAvailableFlights,
  clearSelectedFlight,
  setSelectedSeat,
  incrementExtraBaggage,
  decrementExtraBaggage,
} = flightSlice.actions;

export default flightSlice.reducer;
