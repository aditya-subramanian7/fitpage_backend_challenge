const getOpenHigh = async (req, res, next) => {

  async function main() {
    const data = {
      "id": 3,
      "name": "Open = High",
      "tag": "Bullish",
      "color": "green",
      "criteria": [
        {
          "type": "variable",
          "text": "Today’s open < yesterday’s low by $1 %",
          "variable": {
            "$1": {
              "type": "value",
              "values": [
                -3,
                -1,
                -2,
                -5,
                -10
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

module.exports = getOpenHigh
