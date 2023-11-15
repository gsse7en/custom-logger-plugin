import Foundation

@objc public class CustomLogger: NSObject {
    @objc public func log(_ value: String) -> String {
        print("IOS ECHO:" + value)
        return value
    }
}
