const data = {
    locations: [],
    get locations () {
    return this._location
},

set location(value) {
    this._lovation = value trim ()
    this.location.push(this._location)

    }
}

// uses data object
data.location = 'thiland',
data.location = 'usa'
console.log(data)