const API_BASE = "https://kaspa.herokuapp.com/"

export async function getBlock(hash) {
    const res = await fetch(`${API_BASE}blocks/${hash}`, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then((response) => response.json())
        .then(data => {
            return data
        })
    return res
}

export async function getAddressBalance(addr) {
    const res = await fetch(`${API_BASE}addresses/${addr}/balance`, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then((response) => response.json())
        .then(data => {
            return data.balance
        })
    return res
}



export async function getAddressUtxos(addr) {
    const res = await fetch(`${API_BASE}addresses/${addr}/utxos`, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then((response) => response.json())
        .then(data => {
            return data
        })
    return res
}
