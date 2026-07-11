const mongoose = require('mongoose');
require('dotenv').config();
const Machine = require('./models/Machine'); 

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to excelpack_machine_db...');

    await Machine.deleteMany();
    console.log('Cleared existing catalog.');

    const fullCatalog = [
      {
        modelName: 'Vertical Pouch Sealing Machine',
        category: 'Sealing Machine',
        description: 'A semi-automatic machine used to seal different types of pouches made from various packaging films. It operates using a continuous heat sealing system, ensuring strong and consistent sealing.',
        specifications: { 
          performance: {
            productionSpeed: '5-10 meters/minute',
            pouchType: 'Various Packaging Films',
            sealWidth: '8mm to 12mm (Adjustable)',
            maxConveyorLoad: '3 Kgs per pouch'
          },
          mechanical: {
            conveyor: 'Adjustable conveyor for different pouch lengths',
            construction: 'Food Grade SS304 Body',
            machineDimensions: '1200 x 600 x 1100 mm',
            netWeight: 'Approx 85 Kg'
          },
          utilities: {
            powerRequirement: '220V AC, 50Hz, Single Phase',
            powerConsumption: 'Approx 2 kW',
            coolingSystem: 'Ambient Air Cooled',
            compressedAir: 'Not Required'
          },
          electronics: {
            plc: 'Easy 301',
            hmi: 'IT7070E-ENT',
            vfd: 'MD200',
            temperatureController: 'Digital PID Controller'
          }
        },
        features: [
          'Continuous heat sealing system for airtight packaging',
          'Adjustable conveyor system for varying pouch dimensions',
          'Compatible with Auger, Servo, and Weigh Filling systems',
          'Precision PID temperature controllers for accurate seal integrity',
          'Heavy-duty castor wheels for easy factory floor mobility',
          'Emergency stop and overload protection circuits',
          'Tool-less changeover design for quick daily maintenance'
        ],
        isActive: true
      },
      {
        modelName: 'Automatic Form Fill & Seal Machine',
        category: 'Form Fill & Seal',
        description: 'An automatic machine used for forming, filling, and sealing pouches in one continuous process. Ideal for packing tea, coffee, tobacco, spices, namkeen, and liquid products.',
        specifications: { 
          performance: {
            fillingRange: '1 gm to 100 gm',
            productionSpeed: '20-60 pouches/minute',
            pouchType: 'Center Seal / Pillow Pouch',
            dosingAccuracy: '±1.0% of target volume'
          },
          mechanical: {
            machineType: 'Pneumatic / Mechanical',
            frame: 'Heavy-duty SS304 Stainless Steel',
            maxFilmWidth: '350 mm',
            pullingMechanism: 'Friction Belt Pulling'
          },
          utilities: {
            powerRequirement: '220V AC, 50Hz, 2.5 kW',
            compressedAir: '6 Bar (85 PSI), 0.3 m³/min',
            environment: 'Dust-free, 10°C to 40°C'
          },
          electronics: {
            plcSystem: 'Delta / Panasonic Microprocessor',
            temperatureController: 'Independent Omron PID',
            sensors: 'Photoelectric Mark Registration',
            pneumatics: 'SMC / Festo Cylinders'
          }
        },
        features: [
          'Fully automatic operation covering forming, filling, and sealing',
          'Compact and user-friendly design with low footprint',
          'Highly accurate volumetric cup filling system for granules',
          'Optional Nitrogen flushing unit to extend product shelf life',
          'Integrated batch coding and date printing unit',
          'Quick-release forming collar for rapid film changeovers',
          'Self-diagnostic software with visual error alarms'
        ],
        isActive: true
      },
      {
        modelName: 'Automatic Horizontal Form Fill & Seal',
        category: 'Form Fill & Seal',
        description: 'High-speed horizontal wrapping machine designed for solid, individual, or grouped products. Ensures secure and airtight packaging for bakery and hardware items.',
        specifications: { 
          performance: {
            productionSpeed: '40-120 pouches/minute',
            pouchType: 'Horizontal Flow Pouch',
            maxProductLength: 'Up to 300 mm',
            maxProductHeight: 'Up to 65 mm'
          },
          mechanical: {
            operationType: 'Continuous Horizontal Flow',
            sealingJaw: 'Dual Rotary Sealing Jaws',
            conveyor: '2.5 Meter Lug Feed Conveyor',
            construction: 'SS304 Contact Parts'
          },
          utilities: {
            powerRequirement: '220V AC, 50Hz, 3.2 kW',
            compressedAir: 'Not required for standard operation'
          },
          electronics: {
            sensors: 'Dual Photoelectric Tracking Sensors',
            temperatureController: 'Omron PID (3 zones)',
            mainDrive: 'Dual Inverter VFD System',
            hmi: '7-inch Touch Screen Display'
          }
        },
        features: [
          'Continuous horizontal flow wrapping for maximum efficiency',
          'Independent temperature controllers for center and end seals',
          'Adjustable bag former to accommodate multiple product sizes',
          'No-Product-No-Bag sensor to eliminate film waste',
          'Cantilevered frame design for easy cleaning and maintenance',
          'Safety guards with automatic machine interlocks',
          'Ideal for biscuits, chocolate bars, sponges, and hardware parts'
        ],
        isActive: true
      },
      {
        modelName: 'Automatic Multi-Lane Form Fill & Seal',
        category: 'Form Fill & Seal',
        description: 'Advanced multi-lane packaging system designed for high-volume, small-portion packaging like ketchup, shampoo, or single-serve coffee sticks.',
        specifications: { 
          performance: {
            productionSpeed: 'Up to 300 pouches/min (across all lanes)',
            pouchType: 'Stick Packs / 4-Side Seal Sachets',
            laneCount: '4 to 8 Lanes (Customizable)',
            fillVolume: '5ml to 50ml per lane'
          },
          mechanical: {
            dosingSystem: 'Multi-head Piston Pump or Volumetric',
            cuttingType: 'Zig-Zag, Straight, or Perforation Cut',
            filmSlitting: 'Rotary Blade Film Slitter',
            construction: 'Full SS304 GMP Standard'
          },
          utilities: {
            powerRequirement: '380V AC, 50Hz, 3 Phase (5.5 kW)',
            compressedAir: '0.6 MPa, 0.5 m³/min'
          },
          electronics: {
            controlSystem: 'Siemens / Delta Multi-axis PLC',
            hmiDisplay: '10-inch Color Touch Screen',
            servoMotors: 'Independent Pull & Seal Servos',
            tracking: 'High-speed Optical Print Registration'
          }
        },
        features: [
          'High efficiency multi-lane forming and sealing technology',
          'Precision volumetric or pump dosing systems for liquids/powders',
          'Independent servo-driven film pulling for perfectly aligned sachets',
          'Automatic web tension control to prevent film snapping',
          'UV sterilization lamp integration for food safety',
          'Easy-to-clean pump architecture for rapid flavor changeovers',
          'Low maintenance continuous operation geared for 24/7 cycles'
        ],
        isActive: true
      },
      {
        modelName: 'Vacuuming, Nitrogen Flushing & Sealer',
        category: 'Sealing Machine',
        description: 'Removes ambient air and replaces it with nitrogen before sealing the pouch. Crucial for extending the shelf life of perishable goods and preventing oxidation.',
        specifications: { 
          performance: {
            productionSpeed: 'Semi-Automatic (10-20 bags/min)',
            applications: 'Dry Fruits, Rice, Snacks, Spices',
            vacuumLevel: 'Up to -0.09 MPa',
            sealWidth: '10mm Heavy Duty Seal'
          },
          mechanical: {
            sealingType: 'Continuous Band Sealing',
            conveyor: 'Heavy Duty Motorized Belt (Up to 15kg load)',
            nozzle: 'Retractable Stainless Steel Vacuum Nozzle',
            heightAdjustment: 'Manual Hand-wheel System'
          },
          utilities: {
            powerRequirement: '220V AC, 50Hz, 1.5 kW',
            airRequirement: '0.6 MPa Compressed Air (For pneumatics)',
            nitrogenSource: 'External N2 Cylinder Required'
          },
          electronics: {
            vacuumController: 'Digital Vacuum/Gas Timer Board',
            sealingControl: 'Variable Speed Drive (VFD)',
            temperature: 'Digital PID up to 300°C',
            footSwitch: 'Industrial Pedal Trigger'
          }
        },
        features: [
          'Integrated deep vacuuming and nitrogen flushing sequences',
          'Strong and reliable airtight sealing for heavy bulk bags',
          'Dramatically improves product shelf life and freshness',
          'Adjustable conveyor height to accommodate bulky packages',
          'Foot pedal operation leaves operator hands free for bag alignment',
          'Built-in air filter to protect vacuum pump from product dust',
          'Heavy-duty caster wheels with locking brakes'
        ],
        isActive: true
      },
      {
        modelName: 'Multihead Weighing Machine',
        category: 'Multihead Weigher',
        description: 'High-precision computerised multihead weigher for accurate, high-speed dosing of irregular, sticky, or fragile granular products.',
        specifications: { 
          performance: {
            accuracy: '±0.1g to 1.5g (Product dependent)',
            maxWeighments: 'Up to 120 dumps/minute',
            applications: 'Chips, Kurkure, Nuts, Hardware',
            maxVolume: '3000ml per single dump'
          },
          mechanical: {
            buckets: '10 or 14 Dimpled Stainless Steel Buckets',
            vibrators: 'Adjustable Amplitude Linear Feeders',
            rating: 'IP65 Waterproof / Washdown Capable',
            bucketVolume: '1.6L or 2.5L Options'
          },
          utilities: {
            powerRequirement: '220V AC, 50Hz, Single Phase (1.5 kW)',
            compressedAir: 'Not required (Stepper motor driven)'
          },
          electronics: {
            sensors: 'High-precision Strain Gauge Load Cells',
            interface: '10.4-inch Color Touch Panel HMI',
            memory: 'Up to 99 Pre-set Product Programs',
            processor: 'High-speed DSP processing unit'
          }
        },
        features: [
          'Advanced microprocessor-controlled load cells for extreme accuracy',
          'Seamless electronic integration with VFFS packaging lines',
          'Easy-to-clean hygienic stainless steel buckets with tool-less removal',
          'Staggered dump programming to prevent puffy products from blocking the chute',
          'Auto-tare function ensures accuracy over long production runs',
          'Dimpled bucket surface option specifically designed for sticky products',
          'Real-time production data and statistical tracking on HMI'
        ],
        isActive: true
      },
      {
        modelName: 'Auger Filling Machine',
        category: 'Filling Machine',
        description: 'Servo-driven volumetric filling machine designed specifically for non-free-flowing powders like flour, spices, and milk powder that tend to bridge or clump.',
        specifications: { 
          performance: {
            capacity: '10g up to 10 kg fills',
            fillAccuracy: '±1.0% (Servo Controlled)',
            speed: '20 to 50 fills/minute',
            applications: 'Milk Powder, Spices, Flour, Chemical Powders'
          },
          mechanical: {
            hopper: '50L Quick-release Split Hopper',
            dosing: 'CNC Machined Auger Screw (Custom pitched)',
            material: 'Full SS304 / SS316 Contact Parts',
            levelControl: 'Optical Hopper Level Sensor'
          },
          utilities: {
            powerRequirement: '380V AC (3 Phase), 50Hz, 2.5 kW',
            compressedAir: 'Not Required'
          },
          electronics: {
            motor: 'Panasonic / Delta Servo Motor for Auger',
            agitator: 'Independent VFD Controlled Stirring Motor',
            controls: 'PLC with Touch Screen Interface',
            feedback: 'Optional Weigh-Scale Feedback Loop'
          }
        },
        features: [
          'High-torque servo-controlled auger rotation for ultimate accuracy',
          'Independent agitator motor to prevent powder bridging and rat-holing',
          'Split hopper design allows for extremely fast cleaning and tool-less auger swaps',
          'Can be operated standalone with a pedal or synchronized with a packaging machine',
          'Memory storage for multiple product densities and fill weights',
          'Anti-leak attachments available for ultra-fine flowing powders',
          'Transparent hopper window for visual product level inspection'
        ],
        isActive: true
      },
      {
        modelName: 'Candy Wrapping Machine',
        category: 'Wrapping Machine',
        description: 'Specialized high-speed wrapper for hard candies, toffees, and confectioneries. Capable of twist or pillow wrapping at extreme velocities.',
        specifications: { 
          performance: {
            productionSpeed: 'Up to 800 pieces/minute',
            wrappingType: 'Double Twist Wrap / Pillow Wrap',
            candySizeLength: '12mm - 34mm',
            candySizeWidth: '12mm - 26mm'
          },
          mechanical: {
            feedSystem: 'Continuous Rotary Feeding Disc',
            cutting: 'High-speed Rotary Knife System',
            filmFeeding: 'Dual Roll Holders with Auto-splicing',
            lubrication: 'Automatic Oil Bath System'
          },
          utilities: {
            powerRequirement: '380V AC, 50Hz, 3 Phase (4.0 kW)',
            compressedAir: '0.4 MPa'
          },
          electronics: {
            tracking: 'High-frequency Photoelectric Sensors',
            drive: 'VFD Controlled Main Drive Motor',
            temperature: 'Digital PID for heat seal applications',
            hmi: 'Touch screen parameter control'
          }
        },
        features: [
          'Ultra-high-speed continuous rotary feeding disc mechanism',
          'Automatic film tracking and precision cutting to save material',
          'Gentle handling architecture to prevent hard candy chipping or breakage',
          '100% mechanical cam-driven logic for decades of reliable operation',
          'No-Candy-No-Paper sensor stops film feed if hopper is empty',
          'Quick-change size parts for swapping between candy shapes',
          'Acoustic sound-dampening enclosure for quiet factory operation'
        ],
        isActive: true
      },
      {
        modelName: 'Flow Wrap Machine',
        category: 'Wrapping Machine',
        description: 'Versatile flow wrapping system for solid items like biscuits, chocolate bars, and industrial parts. Provides a protective, sealed pillow bag.',
        specifications: { 
          performance: {
            productionSpeed: '40 - 200 packs/min',
            bagLength: '65mm - 190mm (Adjustable)',
            applications: 'Solid Items (Biscuits, Bars, Sponges)',
            maxFilmWidth: '250mm'
          },
          mechanical: {
            conveyorType: 'Adjustable Lug Pitch Conveyor',
            sealing: 'Dual Rotary Sealing Jaws (Heated)',
            former: 'Adjustable folding box',
            discharge: 'Driven belt exit conveyor'
          },
          utilities: {
            powerRequirement: '220V AC, 50Hz, Single Phase (2.4 kW)'
          },
          electronics: {
            plc: 'Standard Micro-PLC Controller',
            hmi: 'High-visibility 7-inch Touch Screen',
            inverters: 'Dual VFDs for independent speed control',
            sensor: 'High-contrast Eye Mark Scanner'
          }
        },
        features: [
          'Instantly adjustable bag length parameters via HMI',
          'Dual jaw sealing for secure closures at high speeds',
          'High-visibility touch screen for fault diagnostics and speed tuning',
          'Cantilevered mechanical design prevents crumb buildup in drive components',
          'Adjustable folding box allows running multiple product widths',
          'Integrated date coding printer mount',
          'Emergency stop buttons positioned at both feed and discharge ends'
        ],
        isActive: true
      },
      {
        modelName: 'Kurkure Extruder Machine',
        category: 'Food Processing',
        description: 'Rotary head extruder specifically engineered to produce irregular collet snacks like Kurkure, Cheetos, and Nik-Naks from corn meal.',
        specifications: { 
          performance: {
            outputCapacity: '100 - 150 kg/hour',
            applications: 'Corn Meal Collet Snacks',
            productShape: 'Irregular Twists (Kurkure style)'
          },
          mechanical: {
            headType: 'High-grade Brass Extrusion Rotors',
            cutting: 'Adjustable Rotary Face Cutter',
            feeding: 'Screw Feeder with variable speed',
            frame: 'Heavy Duty Mild Steel / SS Cladded'
          },
          utilities: {
            powerRequirement: '380V AC, 3 Phase (15 kW Main Motor)',
            waterCooling: 'Not required (Friction generated heat)'
          },
          electronics: {
            motorControl: 'High-torque VFD Inverter for Main Drive',
            safety: 'Thermal Overload Protection relays',
            feederControl: 'Independent DC/VFD Controller'
          }
        },
        features: [
          'High-grade brass extrusion heads designed for maximum friction and expansion',
          'Heavy-duty 15kW motor ensuring continuous, non-stop operation',
          'Adjustable rotary cutting knives to control product length on the fly',
          'Independent variable speed feeder ensures consistent dough pressure',
          'Friction-based cooking process requires no external heating elements',
          'Quick-release stator head for easy daily cleaning and maintenance',
          'Robust vibration-free mounting chassis'
        ],
        isActive: true
      },
      {
        modelName: 'Potato Peeler Machine',
        category: 'Food Processing',
        description: 'Commercial-grade abrasive peeling machine designed to rapidly peel potatoes and other root vegetables with minimal flesh waste.',
        specifications: { 
          performance: {
            operation: 'Abrasive Centrifugal Peeling',
            batchCapacity: '10 - 15 kg per batch',
            batchTime: '1 - 3 Minutes',
            yield: '90%+ Peeling Efficiency'
          },
          mechanical: {
            material: 'Food Grade Stainless Steel Body',
            lining: 'Replaceable Silicon Carbide Abrasive',
            discharge: 'Quick-release side chute',
            base: 'Heavy-duty vibration dampening feet'
          },
          utilities: {
            powerRequirement: '220V AC, Single Phase (1.5 kW)',
            water: 'Continuous Fresh Water Inlet (1/2 inch hose)'
          },
          electronics: {
            timer: 'Adjustable Digital Batch Timer',
            safety: 'Lid Interlock Proximity Switch',
            motor: 'IP55 Rated Washdown Motor'
          }
        },
        features: [
          'High-speed abrasive peeling wall for rapid skin removal',
          'Continuous water washing inlet flushes away peels instantly',
          'Quick-release side discharge chute for fast product evacuation',
          'Safety interlock switch immediately stops motor if lid is opened',
          'Replaceable abrasive lining extends the machine\'s lifespan indefinitely',
          'Transparent acrylic lid for visual inspection of peeling progress',
          'Hygienic, easy-to-clean stainless steel washdown design'
        ],
        isActive: true
      },
      {
        modelName: 'Tray Dryer Machine',
        category: 'Food Processing',
        description: 'Industrial thermal drying oven used for moisture removal in food products, spices, herbs, and chemicals using forced hot air circulation.',
        specifications: { 
          performance: {
            dryingType: 'Forced Air Thermal Drying',
            capacity: '24 Trays (approx 50-70 kg per batch)',
            temperatureRange: 'Ambient to 150°C',
            dryingTime: 'Product dependent (Typically 2-6 hours)'
          },
          mechanical: {
            insulation: '50mm High-density Glass Wool',
            trays: 'SS304 / Aluminum (16 x 32 x 1.25 inches)',
            doors: 'Heavy-duty insulated doors with silicon gaskets',
            frame: 'Rigid angle iron frame with SS paneling'
          },
          utilities: {
            powerRequirement: '440V AC, 3 Phase (9 kW Heating Load)'
          },
          electronics: {
            temperatureController: 'Digital PID Controller (±1°C Accuracy)',
            blower: 'High-velocity Centrifugal Circulation Fans',
            timer: 'Digital Process Timer with Auto-Shutoff',
            safety: 'Over-temperature cut-off switch'
          }
        },
        features: [
          'Uniform heat distribution via strategic air circulation baffles',
          'Digital PID temperature controller prevents product burning',
          'Heavy-duty insulated doors minimize heat loss and save energy',
          'Adjustable exhaust damper for controlling humidity release',
          'Silicon rubber door gaskets ensure airtight thermal sealing',
          'Trolley-based tray loading available on larger models',
          'Electric heating elements are easily accessible for maintenance'
        ],
        isActive: true
      },
      {
        modelName: 'Oil Extraction Machine',
        category: 'Food Processing',
        description: 'Heavy-duty mechanical screw press for extracting high-yield oil from seeds, nuts, and kernels without chemical solvents.',
        specifications: { 
          performance: {
            process: 'Cold / Hot Screw Pressing',
            capacity: '50 - 100 kg/hour',
            applications: 'Mustard, Groundnut, Sesame, Sunflower',
            oilYield: 'Depends on seed (Typically 35-45%)'
          },
          mechanical: {
            screw: 'Hardened Alloy Steel Forging',
            chamber: 'Heavy-duty Cast Iron Barbed Chamber',
            cakeAdjustment: 'Manual Cake Thickness Wheel',
            filter: 'Integrated Vacuum Filter (Optional)'
          },
          utilities: {
            powerRequirement: '380V AC, 3 Phase (5.5 kW Main Motor)'
          },
          electronics: {
            heating: 'Built-in Electrical Band Heaters',
            temperature: 'Digital Thermostat for Chamber Temp',
            controlPanel: 'Centralized Push-Button Station'
          }
        },
        features: [
          'Hardened alloy steel pressing screw ensures years of wear resistance',
          'High oil yield efficiency through multi-stage pressing chamber',
          'Built-in heating element allows for immediate hot pressing',
          'Adjustable cake thickness control for optimizing oil extraction rates',
          'Low RPM operation preserves the nutritional value of cold-pressed oils',
          'Heavy cast-iron base eliminates vibration during crushing',
          'Easy disassembly design for clearing chamber blockages'
        ],
        isActive: true
      },
      {
        modelName: 'V-Type Mixer Machine',
        category: 'Food Processing',
        description: 'Asymmetrical V-shaped tumbler blender used for the gentle and highly uniform mixing of dry powders, granules, and pharmaceuticals.',
        specifications: { 
          performance: {
            mixingType: 'Batch Tumbling (360 Degree)',
            workingVolume: '100 Liters to 500 Liters',
            mixingTime: '5 - 15 Minutes per batch',
            applications: 'Dry Powders, Pharmaceuticals, Spices'
          },
          mechanical: {
            design: 'Asymmetrical V-Shape Cylinder',
            material: 'Full SS304 / SS316 Pharma Grade Polished',
            loading: 'Top quick-open manhole',
            discharge: 'Bottom butterfly valve'
          },
          utilities: {
            powerRequirement: '380V AC, 3 Phase (2.2 kW)'
          },
          electronics: {
            controls: 'Independent Forward/Reverse Jog Station',
            timer: 'Digital Process Timer with Auto-Stop',
            safety: 'Safety guard rails with limit switches'
          }
        },
        features: [
          'Asymmetrical V-shape design ensures intense cross-flow and no dead mixing angles',
          'Homogeneous 360-degree blending preserves fragile granular structures',
          'Highly polished internal surfaces prevent material sticking and cross-contamination',
          'Large butterfly valve allows for rapid, dust-free discharge',
          'Safety limit switches prevent operation if guard rails are open',
          'Low noise and maintenance-free direct gear-drive system',
          'Optional internal intensifier bar for breaking up powder agglomerates'
        ],
        isActive: true
      },
      {
        modelName: 'Coating Pan Machine',
        category: 'Food Processing',
        description: 'Rotating hemispherical pan machine used for sugar-coating candies, chocolates, and evenly distributing liquid flavorings over snacks.',
        specifications: { 
          performance: {
            rotationSpeed: '10 - 36 RPM (Variable)',
            batchCapacity: '20 - 50 kg per batch',
            applications: 'Candy Coating, Snack Flavouring, Pharma Pills'
          },
          mechanical: {
            pan: '36-inch Hemispherical SS304 Pan',
            tilt: 'Adjustable Pan Angle via Hand-wheel',
            drive: 'Heavy-duty worm gear reduction box',
            frame: 'SS Cladded Mild Steel Enclosure'
          },
          utilities: {
            powerRequirement: '220V AC / 380V, 1.5 kW'
          },
          electronics: {
            driveControl: 'Variable Frequency Drive (VFD)',
            heating: 'Optional Hot Air Blower Controller',
            controls: 'Panel mounted on machine body'
          }
        },
        features: [
          'Variable speed VFD allows tuning rotation for different product weights',
          'Adjustable pan tilt angle optimizes the tumbling action of the product',
          'Smooth SS304 interior ensures even coating distribution without damage',
          'Optional hot air blower attachment accelerates sugar drying times',
          'Heavy-duty worm gearbox prevents pan slippage under full load',
          'Easy to wash and sanitize between flavor changeovers',
          'Compact footprint suitable for small confectionery kitchens'
        ],
        isActive: true
      },
      {
        modelName: 'Rewinding Machine',
        category: 'Support Equipment',
        description: 'Industrial rewinder for adjusting, correcting, or slitting packaging film rolls. Essential for correcting telescoping rolls before they go on the VFFS machine.',
        specifications: { 
          performance: {
            operation: 'Motorized Roll to Roll',
            lineSpeed: 'Up to 100 meters/minute',
            maxWebWidth: '500mm / 800mm Options',
            maxRollWeight: 'Up to 50 kg'
          },
          mechanical: {
            tensionControl: 'Adjustable Mechanical Friction Brake',
            shafts: '3-inch Quick-change Pneumatic Air Shafts',
            slitting: 'Optional Rotary Slitting Blades',
            frame: 'Heavy-duty Steel Plate Construction'
          },
          utilities: {
            powerRequirement: '220V AC, 50Hz, Single Phase (1.0 kW)',
            compressedAir: 'Required for Air Shafts (4 Bar)'
          },
          electronics: {
            sensors: 'Web Edge Alignment Sensors (EPC)',
            motor: 'Variable Speed DC/AC Motor with VFD',
            counter: 'Digital Meter Counter'
          }
        },
        features: [
          'Rapidly corrects poorly wound or telescoping supplier film rolls',
          'Maintains precise web tension to prevent film stretching',
          'Pneumatic air shafts allow for instant, tool-less roll changes',
          'Digital meter counter accurately measures film length for inventory',
          'Web Edge Position Control (EPC) ensures perfectly straight rewinding',
          'Optional slitting blades can cut wide rolls into narrower lanes',
          'Prevents costly VFFS machine downtime caused by bad film rolls'
        ],
        isActive: true
      }
    ];

    await Machine.insertMany(fullCatalog);
    console.log('✅ Full Excelpack Database (Nested Enterprise Architecture) successfully seeded!');

    mongoose.connection.close();
    process.exit();
    
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();