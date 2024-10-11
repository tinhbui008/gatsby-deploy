import { Vector3 } from "three"
import { proxy } from "valtio"
import { derive } from "valtio/utils"

const data = [
  {
    id: 1,
    name: "Vietnam",
    director: "Christoper Schniders",
    role: "Regional Director",
    address: "39 Nguyen Duy Hieu District 2, Ho Chi Minh City, Viet Nam",
    tel: "+8477123291",
    lat: 10.78751484546242,
    lon: 106.69226762483659,
    map: "/offices/vietnam.svg",
    highlightedProject1: {
      title: "Epic semi-submersible vessel",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-study-3-1-1024x751.jpeg",
      url: "/our-work/epic-semi-submersible-vessel/",
    },
    highlightedProject2: {
      title: "1,500 MT radial quadrant shiploader",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-9-2-1024x683.jpeg",
      url: "/our-work/1500-mt-radial-quadrant-shiploader/",
    },
  },
  {
    id: 2,
    name: "Thailand - Bangkok",
    director: "Sebastian Heinzerling",
    role: "Director Operations & Finance",
    address:
      "One Pacific Place, 12th Fl., Sukhumvit Road, Khlong Toei, Khlong Toei, Bangkok 10110",
    tel: "+74771232921",
    lat: 13.740525728894218,
    lon: 100.55487657438945,
    map: "/offices/thailand.svg",
    highlightedProject1: {
      title: "Epic semi-submersible vessel",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-study-3-1-1024x751.jpeg",
      url: "/our-work/epic-semi-submersible-vessel/",
    },
    highlightedProject2: {
      title: "1,500 MT radial quadrant shiploader",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-9-2-1024x683.jpeg",
      url: "/our-work/1500-mt-radial-quadrant-shiploader/",
    },
  },
  {
    id: 3,
    name: "Thailand - Laem Chabang",
    director: "Sebastian Heinzerling",
    role: "Director Operations & Finance",
    address:
      "53 Moo 9 Talay Thong Tower, 14th floor suite #1406, Sukhumvit Road, T. Tungsukla, A. Sriracha, Chonburi 20230",
    tel: "+74771232921",
    lat: 13.09048969060072,
    lon: 100.92160454530878,
    map: "/offices/thailand.svg",
    highlightedProject1: {
      title: "Epic semi-submersible vessel",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-study-3-1-1024x751.jpeg",
      url: "/our-work/epic-semi-submersible-vessel/",
    },
    highlightedProject2: {
      title: "1,500 MT radial quadrant shiploader",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-9-2-1024x683.jpeg",
      url: "/our-work/1500-mt-radial-quadrant-shiploader/",
    },
  },
  {
    id: 4,
    name: "Singapore",
    director: "Christoper Schniders",
    role: "Regional Director",
    address: "No. 2 Venture Drive, #08-01, Vision Exchange, Singapore 608526",
    tel: "+6321312911",
    lat: 1.2906562282983522,
    lon: 103.8531679806931,
    map: "/offices/singapore.svg",
    highlightedProject1: {
      title: "Epic semi-submersible vessel",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-study-3-1-1024x751.jpeg",
      url: "/our-work/epic-semi-submersible-vessel/",
    },
    highlightedProject2: {
      title: "1,500 MT radial quadrant shiploader",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-9-2-1024x683.jpeg",
      url: "/our-work/1500-mt-radial-quadrant-shiploader/",
    },
  },
  {
    id: 5,
    name: "Australia",
    director: "Christoper Schniders",
    role: "Regional Director",
    address: "Unit 2/69 Montpelier Road Bowen Hills, Queensland 4006 Australia",
    tel: "+6321312911",
    lat: -27.447918903359255,
    lon: 153.0387917264784,
    map: "/offices/australia.svg",
    highlightedProject1: {
      title: "Epic semi-submersible vessel",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-study-3-1-1024x751.jpeg",
      url: "/our-work/epic-semi-submersible-vessel/",
    },
    highlightedProject2: {
      title: "1,500 MT radial quadrant shiploader",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-9-2-1024x683.jpeg",
      url: "/our-work/1500-mt-radial-quadrant-shiploader/",
    },
  },
  {
    id: 6,
    name: "Indonesia - Jakarta",
    director: "Christoper Schniders",
    role: "Regional Director",
    address:
      "Menara Prima 11th Floor Unit B Jl. DR. Ide Anak Agung Gde Agung Blok 6.2 Kawasan Mega Kuningan, Jakarta Selatan 12950 Indonesia",
    tel: "+6321312911",
    lat: -6.230053362323726,
    lon: 106.8261544809377,
    map: "/offices/indo.svg",
    highlightedProject1: {
      title: "Epic semi-submersible vessel",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-study-3-1-1024x751.jpeg",
      url: "/our-work/epic-semi-submersible-vessel/",
    },
    highlightedProject2: {
      title: "1,500 MT radial quadrant shiploader",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-9-2-1024x683.jpeg",
      url: "/our-work/1500-mt-radial-quadrant-shiploader/",
    },
  },
  {
    id: 7,
    name: "Indonesia - Batam",
    director: "Christoper Schniders",
    role: "Regional Director",
    address: "Graha Nagoya Mas, 3rd Floor Room West 05 Jln. Imam Bonjol Nagoya",
    tel: "+6321323111",
    lat: -1.1446148466417159,
    lon: 104.01040769812542,
    map: "/offices/indo.svg",
    highlightedProject1: {
      title: "Epic semi-submersible vessel",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-study-3-1-1024x751.jpeg",
      url: "/our-work/epic-semi-submersible-vessel/",
    },
    highlightedProject2: {
      title: "1,500 MT radial quadrant shiploader",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-9-2-1024x683.jpeg",
      url: "/our-work/1500-mt-radial-quadrant-shiploader/",
    },
  },
  {
    id: 8,
    name: "Taiwan Office",
    director: "Christoper Schniders",
    role: "Regional Director",
    address:
      "台北市內湖區洲子街７５號６樓 6Fl., NO.75, Zhouzi Street, Neihu Dist, Taipei 11493",
    tel: "+6321323111",
    lat: 25.080497426309744,
    lon: 121.57149488110682,
    map: "/offices/taiwan.svg",
    highlightedProject1: {
      title: "Epic semi-submersible vessel",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-study-3-1-1024x751.jpeg",
      url: "/our-work/epic-semi-submersible-vessel/",
    },
    highlightedProject2: {
      title: "1,500 MT radial quadrant shiploader",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-9-2-1024x683.jpeg",
      url: "/our-work/1500-mt-radial-quadrant-shiploader/",
    },
  },
  {
    id: 9,
    name: "USA - Houston",
    director: "Christoper Schniders",
    role: "Regional Director",
    address: "50 Briar Hollow Ln, Suite 405W Houston, TX 77027",
    tel: "+6321323111",
    lat: 29.75465565401035,
    lon: -95.452524059295,
    map: "/offices/usa.svg",
    highlightedProject1: {
      title: "Epic semi-submersible vessel",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-study-3-1-1024x751.jpeg",
      url: "/our-work/epic-semi-submersible-vessel/",
    },
    highlightedProject2: {
      title: "1,500 MT radial quadrant shiploader",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-9-2-1024x683.jpeg",
      url: "/our-work/1500-mt-radial-quadrant-shiploader/",
    },
  },
  {
    id: 9,
    name: "Malasyia",
    director: "Christoper Schniders",
    role: "Regional Director",
    address:
      "A-13A-13A, Menara Prima, Jalan PJU 1/39, Dataran Prima, 47301 Petaling Jaya Selangor, Malaysia",
    tel: "+4482829122",
    lat: 3.1181614013456356,
    lon: 101.5952009330404,
    map: "/offices/malaysia.svg",
    highlightedProject1: {
      title: "Epic semi-submersible vessel",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-study-3-1-1024x751.jpeg",
      url: "/our-work/epic-semi-submersible-vessel/",
    },
    highlightedProject2: {
      title: "1,500 MT radial quadrant shiploader",
      image:
        "https://fls.saigondigitaldev.com/wp-content/uploads/2022/01/FLS-Projects-Case-9-2-1024x683.jpeg",
      url: "/our-work/1500-mt-radial-quadrant-shiploader/",
    },
  },
]

const capabilitiesData = [
  {
    name: "WAREHOUSING",
    heading: "We envision spaces that bring supply chains to the next level.",
    image:
      "http://fls.saigondigitaldev.com/wp-content/uploads/2022/02/FLS-WAREHOUSING.jpg",
    url: "/warehousing",
  },
  {
    name: "PROJECTS",
    heading: "With expert hands, we handle the complicated with precision.",
    image:
      "http://fls.saigondigitaldev.com/wp-content/uploads/2022/02/FLS-PROJECTS.png",
    url: "/projects",
  },
  {
    name: "TRADING",
    heading: "We define and shape solutions to meet ever-changing needs.",
    image:
      "http://fls.saigondigitaldev.com/wp-content/uploads/2022/02/FLS-LOGISTICS.png",
    url: "/trading",
  },
  {
    name: "LOGISTICS",
    heading: "We humanise a seemingly standardised experience.",
    image:
      "http://fls.saigondigitaldev.com/wp-content/uploads/2022/02/FLS-LOGISTICS.png",
    url: "/logistics",
  },
  // {
  //   name: "BEHINDGLOBE",
  //   heading: "Heading",
  //   description: "This is a description",
  //   url: "www.google.com"
  // }
]

/**
 * offices - This is just the actual list of offices
 *
 * selectedOfficeId - This is used to determin which office has been clicked on
 * The one that is active will be zoomed on. It will also be the one whos data
 * we fetch when showing the panel
 *
 * savedCameraPosition - We need to store the position of the current
 * selected office. This is used when zooming out.
 */
export const state = proxy({
  offices: data,
  selectedOfficeId: null,
  savedCameraPosition: new Vector3(10),
  capabilities: capabilitiesData,
  selectedCapability: null,
  capabilityMarkerPositions: {},
  zoomOut: false,
  globe: {
    zoomOut: false,
    zoomIn: false,
    globalOffices: [],
    isMainElement: true,
  },
})

/**
 * This is used to store some app logic that is reusable
 *
 * canOrbit - so we only want to be able to orbit when we are not looking
 * at any offices. We also do not want to be able to orbit while the camera
 * is zooming out
 *
 * selectedOfficeData - This will take the selected office id and return the actual
 * data. It just loops through the list of offices and returns the matching office
 */
derive(
  {
    canOrbit: get =>
      !get(state).zoomOut &&
      !get(state).selectedOfficeId &&
      !get(state).selectedCapability,
    selectedOfficeData: get =>
      get(state).offices.find(
        office => office.id === get(state).selectedOfficeId
      ),
    selectedCapabilityData: get =>
      get(state).capabilities.find(
        capability => capability.name === get(state).selectedCapability
      ),
  },
  {
    proxy: state,
  }
)

/**
 * When we close the panel, we want to set the selectedOfficeId to 0
 * which means that we are not looking at any offices
 *
 * We also want to set zoomOut to true. When this is true, the camera will
 * start zooming out until a distance of 10
 *
 * But we must make sure to set it back to false after some time has
 * passed. Or else we wont be able to orbit again without it snapping into
 * place.
 */
export const closePanel = () => {
  state.selectedOfficeId = null
  state.selectedCapability = null
  state.zoomOut = true
  setTimeout(() => {
    state.zoomOut = false
  }, 1000)
}
export const addGlobeToBg = () => {
  state.globe.isMainElement = false
  state.globe.zoomIn = true
  setTimeout(() => {
    state.globe.zoomIn = false
  }, 1000)
}

export const removeGlobeFromBg = () => {
  state.globe.isMainElement = true
  state.globe.zoomOut = true
  setTimeout(() => {
    state.globe.zoomOut = false
  }, 1000)
}
export const selectCapability = name => {
  state.selectedOfficeId = 0
  state.selectedCapability = name
}

export const selecOffice = id => {
  state.selectedCapability = null
  state.selectedOfficeId = id
}

// setTimeout(() => {
//   // console.log(state.capabilityMarkerPositions)
// }, 5000)
