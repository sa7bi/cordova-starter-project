//
//  HelloIos.h
//  TestPluginIos
//
//  Created by sahbi.alhajbel on 17.04.15.
//
//

#import <Cordova/CDV.h>

@interface HelloIos : CDVPlugin

-(void)sayHello:(CDVInvokedUrlCommand*)command;

@end
