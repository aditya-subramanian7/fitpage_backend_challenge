const getRSI = async (req, res, next) => {

  async function main() {
    const data = {
      "id": 5,
      "name": "RSI Overbought",
      "tag": "Bearish",
      "color": "red",
      "criteria": [
        {
          "type": "variable",
          "text": "Max of last 5 days close > Max of last 120 days close by $1 %",
          "variable": {
            "$1": {
              "type": "value",
              "values": [
                2,
                1,
                3,
                5
              ]
            }
          }
        },
        {
          "type": "variable",
          "text": "Today's Volume > prev $2 Vol SMA by $3 x",
          "variable": {
            "$2": {
              "type": "value",
              "values": [
                10,
                5,
                20,
                30
              ]
            },
            "$3": {
              "type": "value",
              "values": [
                1.5,
                0.5,
                1,
                2,
                3
              ]
            }
          }
        },
        {
          "type": "variable",
          "text": "RSI $4 > 20",
          "variable": {
            "$4": {
              "type": "indicator",
              "study_type": "rsi",
              "parameter_name": "period",
              "min_value": 1,
              "max_value": 99,
              "default_value": 14
            }
          }
        }
      ]
    }

    res.json(data)
  }

  main()
}

module.exports = getRSI
