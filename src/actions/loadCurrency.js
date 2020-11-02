import {createAsyncThunk} from '@reduxjs/toolkit';

export const allCurrency = createAsyncThunk('currency/loadAllCurrency', async () => {
    const response = await fetch('http://api.coinlayer.com/list?access_key=5be21debb6fab4ab9c20fe5768277e45');
    const data = await response.json();
    return {crypto: data.crypto,fiat: data.fiat}
});