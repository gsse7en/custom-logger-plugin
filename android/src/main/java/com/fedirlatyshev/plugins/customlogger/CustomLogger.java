package com.fedirlatyshev.plugins.customlogger;

import android.util.Log;

public class CustomLogger {

    public String log(String value) {
        Log.i("ECHO ANDROID:", value);
        return value;
    }
}
