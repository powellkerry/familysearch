var sort = {
    sortObjectArray: function (inputArray, fields) {
        var sortedArray = inputArray,
            first = fields.length >=0 ? fields[0] : null,
            second = fields.length >= 2 ? fields[1] : null,
            third = fields.length >= 3 ? fields[2] : null,
            fourth = fields.length >= 4 ? fields[3] : null;
        if (first) {
            sortedArray = sortedArray.sort(function (a, b) {
                if (a[first.field] < b[first.field]) {
                    return first.direction == 'ASC' ? -1 : 1;
                } else if (a[first.field] > b[first.field]) {
                    return first.direction == 'ASC' ? 1 : -1;
                } else {
                    if (second) {
                        if (a[second.field] < b[second.field]) {
                            return second.direction == 'ASC' ? -1 : 1;
                        } else if (a[second.field] > b[second.field]) {
                            return second.direction == 'ASC' ? 1 : -1;
                        } else {
                            if (third) {
                                if (a[third.field] < b[third.field]) {
                                    return third.direction == 'ASC' ? -1 : 1;
                                } else if (a[third.field] > b[third.field]) {
                                    return third.direction == 'ASC' ? 1 : -1;
                                } else {
                                    if (fourth) {
                                        if (a[fourth.field] < b[fourth.field]) {
                                            return fourth.direction == 'ASC' ? -1 : 1;
                                        } else if (a[fourth.field] > b[fourth.field]) {
                                            return fourth.direction == 'ASC' ? 1 : -1;
                                        } else {
                                            return 0;
                                        }
                                    } else {
                                        return 0;
                                    }
                                }
                            } else {
                                return 0;
                            }
                        }
                    } else {
                        return 0;
                    }
                }
            });
            return sortedArray;
        }
    }
}