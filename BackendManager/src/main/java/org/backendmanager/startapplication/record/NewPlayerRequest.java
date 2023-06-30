package org.backendmanager.startapplication.record;

import org.backendmanager.startapplication.enums.Category;

public record NewPlayerRequest(String username, Category category, Integer points) {
}