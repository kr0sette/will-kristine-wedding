export interface FAQItem {
  question: string;
  response: string[];
  value: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "When and how should I RSVP?",
    response: [
      "Kindly RSVP by April 15, 2026.  Go to the RSVP section of this site and click the appropraite button (if you are an on-site or off-site guest).   RSVPs are online only.  There is no mail-in form."
    ],
    value: "rsvp"
  },
  {
    question: "How many days/nights are we expected to attend?",
    response: [
      "On-site guests are asked to stay at least 2 nights - one of which should be the evening of the ceremony and reception. But we would love if you could stay for the full week!",
      "Off-site guests are welcome to come and hang out at the venue all through the week whenever they please, but it is okay if they can only attend the ceremony and reception."
    ],
    value: "days-nights"
  },
  {
    question: "Am I required to attend all wedding week events?",
    response: [
      "Aside from the wedding ceremony and reception, both on-site and off-site guests are not required to attend any other events on the schedule. Feel free to explore the area during the day or simply just relax at the venue.",
      "However, if you are part of the ceremony, you are required to attend the rehearsal and rehearsal dinner."
    ],
    value: "required-events"
  },
  {
    question: "Can I bring a plus one?",
    response: [
      "If your invitation was addressed to yourself \"and guest\" then you are welcome to bring a plus one."
    ],
    value: "plus-one"
  },
  {
    question: "Can I bring my children?",
    response: [
      "Absolutely! If your children are under 18 years old, they are welcome to attend with you. Please make sure to include their names in your RSVP form.",
      "If they are over 18 and were not named on the invite or given their own invitation, we were unfortunately unable to extend an invite to them."
    ],
    value: "children"
  },
  {
    question: "Are meals provided?",
    response: [
      "Breakfast is serve yourself. There will be items in the communal kitchen for you to prepare at any time - eggs, oatmeal, cereal, bread, etc.",
      "Lunch and dinner will be provided.  Some meals we will have catered, and some meals we will cook as a group in the communal kitchen.  Preparation help during meals is appreciated but not required.  More info to come.",
      "You are not required to join in on meals and can eat lunch at an outside establishment if you'd like.",
      "Off-site guests are welcome to join in on meals.  Please fill out your RSVP form in full to help us prepare in advance.  Thank you!"
    ],
    value: "meals"
  },
  {
    question: "Do I need to rent a car?",
    response: [
      "You do not need to rent a car to get to the venue or airport.  However, we are an hour away from Asheville, NC (the nearest city) and you may want to schedule your Uber or Lyft in advance if you trying to catch a flight.  Renting a car will give you more freedom and flexibility to explore the area and leave when you choose.",
      "If you would like to organize a carpool with other guests, please let us know.  We can help you arrange it!"
    ],
    value: "car-rental"
  },
  {
    question: "What is the attire?",
    response: [
      "For the ceremony and reception, attire is semi-formal.  For men - suits in beige, grey, navy, or black are appropriate. A linen suit is fine since it may be hot. Or a crisp button up shirt with a tie. For women - cocktail dresses, gowns, dressy jumpsuits or pantsuits are welcome. Avoid jeans, t-shirts, and sneakers.",
      "Note: Occasionally, you will be in uneven terrain so be sensible with your footwear and feel free to bring a change of shoes.",
      "For the dress rehearsal, attire is dressy casual - sundresses, clean jeans and tshirts, clean sneakers or sandals.  Think dressy picnic.",
      "For the rest of the week, attire is casual.  You will be in nature!"
    ],
    value: "attire"
  },
  {
    question: "Will the wedding be indoors or outdoors?",
    response: [
      "We plan to have the ceremony outdoors but the reception will be indoors.  There will be a backup plan in case of inclement weather."
    ],
    value: "indoors-outdoors"
  },
  {
    question: "Is there parking at the venue?",
    response: [
      "Yes!  There is parking for both on-site and off-site guests. A property map can be found at https://www.mmecoretreat.com/map",
    ],
    value: "parking"
  },
  {
    question: "Is there a hotel room block available for off-site guests?",
    response: [
      "Unfortunately not.  We wanted to give our off-site guests flexibility to stay wherever they choose, whether it is a hotel or an Airbnb."
    ],
    value: "hotel-block"
  },
  {
    question: "How will I get from the hotel to the ceremony?",
    response: [
      "If you are an on-site guest, you will simply need to walk from your room to the main lodge.",
      "If you are an off-site guest, you will need to take a car to and from the venue."
    ],
    value: "transportation"
  },
  {
    question: "I was invited to stay on-site, but would prefer to stay off-site.  Is this okay?",
    response: [
      "Absolutely!  We want you to stay wherever you're most comfortable.  When you RSVP, please still select the \"On-site Guests\" option, but indicate that you'll be arranging your own accomodations.  Continue to fill out the rest of the form in full.",
      "Unfortuanately, we will not be able to cover your room costs if you choose to stay off-site, but you can go to the Travel & Stay section to see a list of nearby hotels."
    ],
    value: "switch-to-offsite"
  },
  {
    question: "I am an on-site guest.  Can I choose the room I'm assigned?",
    response: [
      "When assigning rooms to on-site guests, we will try our best to acommodate everyone's needs first and then consider preferences.  If there is something you want us consider, please fill out your RSVP form in full so we can take it into account."
    ],
    value: "onsite-room-choice"
  },
  {
    question: "I am an off-site guest.  Can I get a room on-site if one becomes available?",
    response: [
      "If a room becomes available we will need to evaluate what to do with it on a case-by-case basis. We recommend that you book your own accommodation first and not wait for a room to free up.",
      "If there is space to lodge you on-site, we will let you know in advance and as soon as possible.  Please keep in mind that we ask that on-site guests stay at least 2 nights."
    ],
    value: "onsite-room-availability"
  }
];
