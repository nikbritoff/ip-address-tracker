const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

const renderInfo = (data) => {
    console.log(data);
    const {
        ip,
        isp,
        location: {
            timezone,
            region,
            country,
        },
    } = data;

    ipInfo.textContent = ip;
    locationInfo.textContent = `${region} ${country}`;
    timezoneInfo.textContent = timezone;
    ispInfo.textContent = isp;

    return data;
};

export {renderInfo};
