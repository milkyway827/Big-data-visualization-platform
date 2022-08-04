package com.bishe.user.model;

import lombok.Data;

import java.io.Serializable;
@Data
public class Equipment implements Serializable {
    private Integer equipmentId;
    private String equipmentName;
}
