import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";

export const CurrentUserDecorator = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    return "hi there!";
  },
);
