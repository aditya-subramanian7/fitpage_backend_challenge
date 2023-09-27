const getCCI = async (req, res, next) => {

  async function main() {
    const data = {
      "id": 4,
      "name": "CCI Reversal",
      "tag": "Bearish",
      "color": "red",
      "criteria": [
        {
          "type": "variable",
          "text": "CCI $1 crosses below $2",
          "variable": {
            "$1": {
              "type": "indicator",
              "study_type": "cci",
              "parameter_name": "period",
              "min_value": 1,
              "max_value": 99,
              "default_value": 20
            },
            "$2": {
              "type": "value",
              "values": [
                100,
                200
              ]
            }
          }
        }
      ]
    }

    res.json(data)
  }

  main()
}

module.exports = getCCI
