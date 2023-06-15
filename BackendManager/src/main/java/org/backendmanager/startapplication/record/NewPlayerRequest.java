package org.backendmanager.startapplication.record;

import org.backendmanager.startapplication.enums.CategoryEnum;

public record NewPlayerRequest(String username, CategoryEnum category) {
}