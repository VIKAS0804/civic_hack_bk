const supabase = require("../config/supabase");

const addReport = async (req, res) => {
  const {
    a_number_last_three,
    arrest_date,
    ice_arrest_location_type,
    reason_for_being_at_court,
    custody_duration,
    latitude,
    longitude,
    immigration_status_at_arrest,
    monitoring_type,
    ice_location_source,
    additional_arrest_information,
    is_verified,
    created_at,
    updated_at,
    created_by,
    had_isap,
    tactics,
    county_name,
  } = req.body;

  const { data, error } = await supabase
    .from("ice_report")
    .insert([
      {
        a_number_last_three,
        arrest_date,
        ice_arrest_location_type,
        reason_for_being_at_court,
        custody_duration,
        latitude,
        longitude,
        immigration_status_at_arrest,
        monitoring_type,
        ice_location_source,
        additional_arrest_information,
        is_verified,
        created_at,
        updated_at,
        created_by,
        had_isap,
        tactics,
        county_name,
      },
    ]);

  if (error) {
    return res.status(500).json({ message: "Error storing report", error });
  }
  res.status(201).json({ message: "Report added", data });
};

const getReports = async (req, res) => {
  console.log("GET /reports endpoint hit");
  const { data, error } = await supabase.from("ice_report").select("*");
  if (error) {
    return res.status(500).json({ message: "Error retrieving reports", error });
  }
  res.status(200).json({ data });
};

module.exports = { addReport, getReports };