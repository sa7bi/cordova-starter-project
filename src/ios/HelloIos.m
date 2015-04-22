//
//  HelloIos.m
//  TestPluginIos
//
//  Created by sahbi.alhajbel on 17.04.15.
//
//

#import "HelloIos.h"

@implementation HelloIos
-(void)sayHello:(CDVInvokedUrlCommand*)command {
    NSString* message = @"Hello iOS";
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:message];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}


@end
