import express from "express";
import mongoose from "mongoose";

import Prices from "../models/prices.js";

/* @route   GET /prices
 * @desc    Get prices route
 * @access  Public
 */
export const getPrices = async (req, res) => {
  try {
    const prices = await Prices.find();

    res.status(200).json(prices);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/* @route   POST /prices
 * @desc    Create price route
 * @access  Public
 */
export const createPrice = async (req, res) => {
  const price = req.body;
  const newPrice = new Prices(price);
  try {
    await newPrice.save();

    res.status(201).json(newPrice);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
