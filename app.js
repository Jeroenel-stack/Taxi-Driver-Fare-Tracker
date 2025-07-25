const rides = [
            { fare: 120, distance: 5, time: "14:30" },
            { fare: 200, distance: 10, time: "15:00" },
            { fare: 150, distance: 7, time: "14:45" },
            { fare: 180, distance: 9, time: "15:10" }
        ];

        function summarizeRides(rides) {
            let totalEarnings = 0;
            let longestRide = rides[0];
            const hourMap = {};

            for (let ride of rides) {
                totalEarnings += ride.fare;
                if (ride.distance > longestRide.distance) longestRide = ride;

                const hour = ride.time.split(":")[0];
                hourMap[hour] = (hourMap[hour] || 0) + 1;
            }

            let peakHour = Object.keys(hourMap).reduce((a, b) => hourMap[a] > hourMap[b] ? a : b);

            console.log(`Total Earnings: ₱${totalEarnings}`);
            console.log(`Longest Ride: ${longestRide.distance}km, ₱${longestRide.fare}`);
            console.log(`Peak Hour: ${peakHour}:00`);
        }

        summarizeRides(rides);