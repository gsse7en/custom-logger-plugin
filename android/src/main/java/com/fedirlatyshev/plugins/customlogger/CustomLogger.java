package com.fedirlatyshev.plugins.customlogger;

import android.util.Log;

public class CustomLogger {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
