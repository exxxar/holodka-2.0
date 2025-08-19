<?php

namespace App\Enums;

enum UserJobStatusEnum: int
{
    case New = 0;
    case InProgress = 1;
    case Completed = 2;
    case Error = 3;
    // etc.

}
